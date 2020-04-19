/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONScene = ( ENGINE, parameters ) => {

  const scene = new ENGINE.Scene( ENGINE.coreData.engine );

  ENGINE.coreData.scene = scene;

  return Object.assign( scene, {} );

};
