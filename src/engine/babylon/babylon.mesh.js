/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONMesh = ( RENDERING_ENGINE, parameters ) => {

  const { args } = parameters.option;
  const { scene } = RENDERING_ENGINE.coreData;
  const mesh = RENDERING_ENGINE.MeshBuilder.CreateSphere( name, args, scene );

  return mesh;

};
