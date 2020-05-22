import { is } from 'u3s';
import { CALLBACK } from '=>/3d-object-builder/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const makeWarningLog = _ => console.warn( 'argument is not a "function".' );

export const Event = Object.freeze( {

  onloader: f => typeof( f ) === 'function' ? CALLBACK.loaders.push( f ) : ( _ => makeWarningLog() )(),
  onresize: f => typeof( f ) === 'function' ? CALLBACK.resizers.push( f ) : ( _ => makeWarningLog() )(),
  onrender: f => typeof( f ) === 'function' ? CALLBACK.renders.push( f ) : ( _ => makeWarningLog() )()

} );
