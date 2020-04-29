import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const Events = Object.freeze( {

  onloader: f => typeof f === 'function' && CALLBACKS.loaders.push( f ),
  onresize: f => typeof f === 'function' && CALLBACKS.resizers.push( f ),
  onrender: f => typeof f === 'function' && CALLBACKS.renders.push( f )

} );
