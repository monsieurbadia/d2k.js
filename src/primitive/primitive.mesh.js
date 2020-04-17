import { reducer } from 'u3s';
import { onrender } from '../event/event.onrender';

// const parseString = ( str ) => {
  
//   return str.toLowerCase().split( '' ).reduce( ( result, s, i ) => [
//     ...result,
//     i === 0 ? s.toUpperCase() : s
//   ], '' ).join( '' );

// };

const MATERIAL = {
  'line-basic': 'LineBasicMaterial',
  'line-dashed': 'LineDashedMaterial',
  'material': 'Material',
  'mesh-basic': 'MeshBasicMaterial',
  'mesh-depth': 'MeshDepthMaterial',
  'mesh-distance': 'MeshDistanceMaterial',
  'lambert': 'MeshLambertMaterial',
  'matcap': 'MeshMatcapMaterial',
  'mesh-normal': 'MeshNormalMaterial',
  'mesh-phong': 'MeshPhongMaterial',
  'mesh-physical': 'MeshPhysicalMaterial',
  'mesh-standard': 'MeshStandardMaterial',
  'mesh-toon': 'MeshToonMaterial',
  'points': 'PointsMaterial',
  'raw-shader': 'RawShaderMaterial',
  'shader': 'ShaderMaterial',
  'shadow': 'ShadowMaterial',
  'sprite': 'SpriteMaterial'
};

/** @private */
const Mesh = ( THREE, parameters ) => {

  const group = new THREE.Group(); // TODO: getGroup()

  const meshes = parameters.reduce( ( result, parameter ) => {

    if ( !MATERIAL[ parameter.material.type ] ) return parameter;
    
    const geometry = new THREE.BoxBufferGeometry( ...parameter.geometry.arguments ); // TODO: getGeometry()
    const material = new THREE[ MATERIAL[ parameter.material.type ] ]( { ...parameter.material.arguments } ); // TODO: getMaterial()
    const mesh = new THREE.Mesh( geometry, material ); // TODO: createMesh()

    mesh.position.set( ...parameter.positions );

    group.add( mesh );

    return [
      ...result,
      parameter.group ? group : mesh
    ];

  }, [] );

  return Object.assign( meshes[ 0 ], {
    onrender
  } );

};

/** @public */
export const createMesh = payload => ( {
  ...payload,
  mesh: reducer( payload.mesh, result => Mesh( THREE, result ) )
} );
