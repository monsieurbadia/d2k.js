/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONScene = ENGINE => {

  const { engine, canvas } = ENGINE.d2kCoreData;
  const scene = new ENGINE.Scene( engine );

  scene.autoClear = false;

  scene.attachControl( canvas );

  scene.beforeRender = () => {

    engine._currentProgram = null;
    engine.wipeCaches( true );

  };

  ENGINE.d2kCoreData.scene = scene;

  return Object.assign( scene, {} );

};
