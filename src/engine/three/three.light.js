import { strings } from 'u3s';
import { Event, Modifier } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREELight = ( {
  RENDERING_ENGINE,
  config = {
    args: [ '0xffffbb 0x080820 1' ],
    name: 'current-light',
    type: 'hemisphere'
  }
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ]( strings.ToInt( ...config.args, ' ' ) );

  Modifier.setDynamicProperty( {
    object3d: light,
    rendering: 'three',
    parameter: config
  } );

  return Object.assign( light, {
    ...Event
  } );

};
