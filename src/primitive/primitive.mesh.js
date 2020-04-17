import { reducer } from 'u3s';

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

  const tt = parameters.reduce( ( result, parameter ) => {

    if ( !MATERIAL[ parameter.material.type ] ) return parameter;
    
    const group = new THREE.Group(); // TODO: getGroup()
    const geometry = new THREE.BoxBufferGeometry( ...parameter.geometry.arguments ); // TODO: getGeometry()
    const material = new THREE[ MATERIAL[ parameter.material.type ] ]( { ...parameter.material.arguments } ); // TODO: getMaterial()
    const mesh = new THREE.Mesh( geometry, material ); // TODO: createMesh()
  
    return [
      ...result,
      group.add( mesh )
    ];

  }, [] );

  return Object.assign( tt[ 0 ], {} );

};

/** @public */
export const createMesh = payload => ( {
  ...payload,
  mesh: reducer( payload.mesh, result => Mesh( THREE, result ) )
} );
