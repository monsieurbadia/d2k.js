/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONMesh = ( ENGINE, parameters ) => {

  const mesh = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1, segments: 32 }, ENGINE.coreData.scene );

  return mesh;

};
