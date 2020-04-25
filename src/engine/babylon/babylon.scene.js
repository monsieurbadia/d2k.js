/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONScene = RENDERING_ENGINE => {

  const { engine } = RENDERING_ENGINE.coreData;
  const scene = new RENDERING_ENGINE.Scene( engine );

  scene.autoClear = false;
  scene.beforeRender = _ => engine.wipeCaches( true );

  RENDERING_ENGINE.coreData.scene = scene;

  return scene;

};
