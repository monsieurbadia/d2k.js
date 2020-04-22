/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONEngine = RENDERING_ENGINE => {

  const { canvas } = RENDERING_ENGINE.coreData;
  const engine = new RENDERING_ENGINE.Engine( canvas, true );

  RENDERING_ENGINE.coreData.engine = engine;

  return engine;

};
