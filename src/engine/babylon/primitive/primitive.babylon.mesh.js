/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONMesh = ( RENDERING_ENGINE, parameters ) => {

  // TODO:
  const { scene } = RENDERING_ENGINE.coreData;
  const mesh = BABYLON.MeshBuilder.CreateSphere( 'sphere', { diameter: 1, segments: 32 }, scene );

  return mesh;

};
