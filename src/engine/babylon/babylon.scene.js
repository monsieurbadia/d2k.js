/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONScene = ( RENDERING_ENGINE, { autoClear, clearColor } ) => {

  const { engine } = RENDERING_ENGINE.coreData;
  const scene = new RENDERING_ENGINE.Scene( engine );
  const cleanCache = _ => engine.wipeCaches( true );

  scene.autoClear = autoClear;
  // scene.clearColor = new RENDERING_ENGINE.Color3( ...clearColor );
  scene.beforeRender = cleanCache;
  RENDERING_ENGINE.coreData.scene = scene;

  return scene;

};
