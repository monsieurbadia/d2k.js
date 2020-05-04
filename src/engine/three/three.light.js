import { strings } from 'u3s';
import { Modifier } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREELight = ( {
  RENDERING_ENGINE,
  config = {
    args: [ "0xffffbb 0x080820 1" ],
    name: 'current-light',
    type: 'hemisphere'
  }
} = {} ) => {

  const properties = Object.keys( config );
  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ]( strings.ToInt( ...config.args, ' ' ) );
  const setDynamicProperty = Modifier.setDynamicProperty( { mesh: light, parameter: config } );

  setDynamicProperty( properties );

  return light;

};
