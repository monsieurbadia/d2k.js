/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONEngine = ENGINE => {

  const canvas = document.createElement( 'canvas' );
  const engine = new ENGINE.Engine( canvas, true );

  // TODO: use sig3
  ENGINE.coreData.engine = engine;

  return engine;

};
