/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONMesh = ( ENGINE, parameters ) => {

  // TODO:
  const { scene } = ENGINE.coreData;
  const mesh = BABYLON.MeshBuilder.CreateSphere( 'sphere', { diameter: 1, segments: 32 }, scene );

  return mesh;

};
