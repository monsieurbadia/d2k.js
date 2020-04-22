/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const FS = Object.freeze( {
  renders: [],
  loaders: []
} );

/** @public */
export const onloader = f => typeof f === 'function' && FS.loaders.push( f );

/** @public */
export const onrender = f => typeof f === 'function' && FS.renders.push( f );

/**
 * events
 * @public
 */

export const Events = _ => {

  return {};

};
