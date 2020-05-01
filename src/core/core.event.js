import { CALLBACK } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const Event = Object.freeze( {

  onloader: f => typeof f === 'function' && CALLBACK.loaders.push( f ),
  onresize: f => typeof f === 'function' && CALLBACK.resizers.push( f ),
  onrender: f => typeof f === 'function' && CALLBACK.renders.push( f )

} );
