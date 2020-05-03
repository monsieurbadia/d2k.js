import { CALLBACK } from '=>/base'
import { Renderer } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONEngine = ( { RENDERING_ENGINE } = {} ) => {

  const { canvas } = RENDERING_ENGINE.coreData;
  const engine = new RENDERING_ENGINE.Engine( canvas, true );

  RENDERING_ENGINE.coreData.engine = engine;

  return Object.assign( engine, {
    ...CALLBACK,
    ...Renderer
  } );

};
