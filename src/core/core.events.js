import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const Events = {

  onloader: f => typeof f === 'function' && CALLBACKS.loaders.push( f ),
  onrender: f => typeof f === 'function' && CALLBACKS.renders.push( f )

};
