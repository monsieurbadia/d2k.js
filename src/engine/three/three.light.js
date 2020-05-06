import { strings } from 'u3s';
import { CONFIG } from '=>/base';
import { Event, Modifier } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREELight = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.LIGHT
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
