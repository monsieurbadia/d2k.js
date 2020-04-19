/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONScene = ( ENGINE, parameters ) => {

  const scene = new ENGINE.Scene( ENGINE.coreData.engine );

  scene.autoClear = false;

  scene.attachControl( ENGINE.coreData.engine.getRenderingCanvas() );

  ENGINE.coreData.scene = scene;

  return Object.assign( scene, {} );

};
