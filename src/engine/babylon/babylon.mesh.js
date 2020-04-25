/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONMesh = ( RENDERING_ENGINE, parameters ) => {

  // TODO: agrs input: [ { "diameter": 1, "segments": 32 } ]
  const { name } = parameters;
  const { scene } = RENDERING_ENGINE.coreData;
  const mesh = BABYLON.MeshBuilder.CreateSphere( name, { diameter: 1, segments: 32 }, scene );

  return mesh;

};
