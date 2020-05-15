import { is } from 'u3s';
import { CALLBACK } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const makeWarningLog = _ => console.warn( 'argument is not a "function".' );

export const Event = Object.freeze( {

  onloader: f => is.method( f ) ? CALLBACK.loaders.push( f ) : ( _ => makeWarningLog() )(),
  onresize: f => is.method( f ) ? CALLBACK.resizers.push( f ) : ( _ => makeWarningLog() )(),
  onrender: f => is.method( f ) ? CALLBACK.renders.push( f ) : ( _ => makeWarningLog() )()

} );
