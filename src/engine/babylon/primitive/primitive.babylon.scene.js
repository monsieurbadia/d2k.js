/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONScene = ENGINE => {

  const { engine, canvas } = ENGINE.coreData;
  const scene = new ENGINE.Scene( engine );

  scene.autoClear = false;

  scene.attachControl( canvas );

  scene.beforeRender = () => {

    engine._currentProgram = null;
    engine.wipeCaches( true );

  };

  ENGINE.coreData.scene = scene;

  return Object.assign( scene, {} );

};
