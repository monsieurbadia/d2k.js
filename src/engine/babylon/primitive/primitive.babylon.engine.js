/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONEngine = ENGINE => {

  const { canvas } = ENGINE.d2kCoreData;
  const engine = new ENGINE.Engine( canvas, true );

  ENGINE.d2kCoreData.engine = engine;

  return engine;

};
