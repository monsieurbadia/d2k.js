/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const beforerender = engine => _ => {

  engine._currentProgram = null;
  engine.wipeCaches( true );

};

/** @public */
export const BABYLONScene = ENGINE => {

  const { engine, canvas } = ENGINE.coreData;
  const scene = new ENGINE.Scene( engine );

  scene.autoClear = false;
  scene.beforeRender = beforerender( engine );
  ENGINE.coreData.scene = scene;

  scene.attachControl( canvas );

  return scene;

};
