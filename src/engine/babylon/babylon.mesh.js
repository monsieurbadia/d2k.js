/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONMesh = ( RENDERING_ENGINE, parameters ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const mesh = RENDERING_ENGINE.MeshBuilder.CreateSphere( name, parameters.args, scene );

  return mesh;

};
