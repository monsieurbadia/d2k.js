/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONScene = RENDERING_ENGINE => {

  const { engine } = RENDERING_ENGINE.coreData;
  const scene = new RENDERING_ENGINE.Scene( engine );
  const cleanCache = _ => engine.wipeCaches( true );

  scene.autoClear = false;
  scene.beforeRender = cleanCache;
  RENDERING_ENGINE.coreData.scene = scene;

  return scene;

};
