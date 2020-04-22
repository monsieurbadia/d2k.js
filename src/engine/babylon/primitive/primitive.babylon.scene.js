/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const beforerender = RENDERING_ENGINE => _ => {

  RENDERING_ENGINE._currentProgram = null;
  RENDERING_ENGINE.wipeCaches( true );

};

/** @public */
export const BABYLONScene = RENDERING_ENGINE => {

  const { engine } = RENDERING_ENGINE.coreData;
  const scene = new RENDERING_ENGINE.Scene( engine );

  scene.autoClear = false;
  scene.beforeRender = beforerender( engine );
  RENDERING_ENGINE.coreData.scene = scene;

  return scene;

};
