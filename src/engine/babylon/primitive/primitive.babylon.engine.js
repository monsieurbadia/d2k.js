/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONEngine = ENGINE => {

  const { canvas } = ENGINE.coreData;
  const engine = new ENGINE.Engine( canvas, true );

  ENGINE.coreData.engine = engine;

  return engine;

};
