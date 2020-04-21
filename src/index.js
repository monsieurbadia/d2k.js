import { pipe } from 'u3s';
import { Creater, Version, DOM, Renderer } from '=>/core/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const COREDATA = {
  BABYLON: {},
  THREE: {}
};

/** @public it creates a css3d primitives to build an 3d scene. */
const oncss3d = parameters => {};

/** @public it creates a glsl setup to use shader. */
const onglsl = parameters => {};

/** @public it creates a layering from two valid engines. */
const onlayering = ( TARGET, SOURCE ) => Renderer( [ TARGET, SOURCE ] );

/** @public it creates a primitives to render a 3d scene. */
const onwebgl = parameters => {

  parameters.ENGINE.coreData = COREDATA;

  const makeOperation = type => callback => Creater(type, callback);

  // TODO:
  const OPERATIONS = [
    payload => ( { ...payload, dom: DOM( payload.ENGINE ) } ),
    makeOperation('loader'),
    makeOperation('engine'),
    makeOperation('scene'),
    makeOperation('camera'),
    makeOperation('mesh'),
    makeOperation('light'),
    makeOperation('renderer')
  ];

  const prepare = pipe( ...OPERATIONS );
  const starter = prepare( parameters );

  // TODO:
  Object
    .keys( starter )
    .filter( key => starter[ key ] === undefined )
    .forEach( key => delete starter[ key ] );

  // TODO:
  delete starter.THREE;

  return { ...starter };

};

/** @public it enables webgpu support. */
const onwebgpu = parameters => {};

/** 
 * d2k
 * 
 * @public
 */

export const d2k = Object.freeze( {
  onlayering,
  onwebgl,
} );

module.exports = d2k;
