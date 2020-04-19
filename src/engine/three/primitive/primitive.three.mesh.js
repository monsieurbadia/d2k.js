import { is } from 'u3s';
import { onloader, onrender } from '=>/core/core.events';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const getGroup = ENGINE => new ENGINE.Group();

/** @private */
const getGeometry = ( ENGINE, type, args ) => new ENGINE[ parseTextToFirstLetterUpperCase( type, 'geometry' ) ]( ...args );

/** @private */
const getMaterial = ( ENGINE, type, args ) => {

  const primitiveName = parseTextToFirstLetterUpperCase( type, 'material' );

  if ( primitiveName.includes( 'Shader' ) ) {

    Object.assign( args, {
      uniforms: {
        resolution: { type: 'v2', value: new ENGINE.Vector2() },
        time: { type: 'f', value: 1.0 }
      }
    } );

  }

  return new ENGINE[ parseTextToFirstLetterUpperCase( type, 'material' ) ]( { ...args } );

};

/** @private */
const getMesh = ( ENGINE, geometry, material ) => new ENGINE.Mesh( geometry, material );

/** @private */
export const THREEMesh = ( ENGINE, parameters ) => {

  if ( !is.array( parameters ) || is.empty( parameters ) ) return;

  const group = getGroup( ENGINE );

  const meshes = parameters.reduce( ( result, parameter ) => {

    const geometry = getGeometry( ENGINE, parameter.geometry.type, parameter.geometry.args );
    const material = getMaterial( ENGINE, parameter.material.type, parameter.material.args );
    const mesh = getMesh( ENGINE, geometry, material );

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

