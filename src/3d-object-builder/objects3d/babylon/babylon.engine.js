import { CALLBACK } from '=>/3d-object-builder/base'
import { Renderer } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
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
