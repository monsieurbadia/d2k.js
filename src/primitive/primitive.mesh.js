import { is, reducer } from 'u3s';
import { onloader, onrender } from '#/event/event';
import { parseTextToFirstLetterUpperCase } from '#/util/util.parser';

/** @private */
const getGroup = THREE => new THREE.Group();

/** @private */
const getGeometry = ( THREE, type, args ) => new THREE[ parseTextToFirstLetterUpperCase( type, 'geometry' ) ]( ...args );

/** @private */
const getMaterial = ( THREE, type, args ) => {

  const primitiveName = parseTextToFirstLetterUpperCase( type, 'material' );

  if ( primitiveName.includes( 'Shader' ) ) {

    Object.assign( args, {
      uniforms: {
        resolution: { type: 'v2', value: new THREE.Vector2() },
        time: { type: 'f', value: 1.0 }
      }
    } );

  }

  return new THREE[ parseTextToFirstLetterUpperCase( type, 'material' ) ]( { ...args } );

};

/** @private */
const getMesh = ( THREE, geometry, material ) => new THREE.Mesh( geometry, material );

/** @private */
const Mesh = ( THREE, parameters ) => {

  if ( !is.array( parameters ) || is.empty( parameters ) ) return;

  const group = getGroup( THREE );

  const meshes = parameters.reduce( ( result, parameter ) => {

    const geometry = getGeometry( THREE, parameter.geometry.type, parameter.geometry.arguments );
    const material = getMaterial( THREE, parameter.material.type, parameter.material.arguments );
    const mesh = getMesh( THREE, geometry, material );

    mesh.position.set( ...parameter.positions );

    return [
      ...result,
      parameter.group ? group.add( mesh ) : mesh
    ];

  }, [] );

  return Object.assign( meshes[ 0 ], {
    onloader,
    onrender
  } );

};

/** @public */
export const createMesh = payload => ( {
  ...payload,
  mesh: reducer( payload.mesh, result => Mesh( THREE, result ) )
} );
