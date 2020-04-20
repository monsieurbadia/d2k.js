/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONMesh = ( ENGINE, parameters ) => {

  const mesh = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, ENGINE.d2kCoreData.scene );

  return mesh;

};
