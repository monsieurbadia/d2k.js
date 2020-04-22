/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const EVENTS = Object.freeze( {
  renders: [],
  loaders: []
} );

/** @public */
export const onloader = f => typeof f === 'function' && EVENTS.loaders.push( f );

/** @public */
export const onrender = f => typeof f === 'function' && EVENTS.renders.push( f );

/**
 * events
 * @public
 */

export const Events = _ => {

  return {};

};
