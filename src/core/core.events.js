/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public callbacks */
export const eventsCallback = Object.freeze( {
  renders: [],
  loaders: []
} );

/** @public */
export const onloader = f => typeof f === 'function' && eventsCallback.loaders.push( f );

/** @public */
export const onrender = f => typeof f === 'function' && eventsCallback.renders.push( f );
