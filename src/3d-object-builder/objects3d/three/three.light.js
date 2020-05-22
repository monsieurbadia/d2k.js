import { strings } from 'u3s';
import { CONFIG } from '=>/3d-object-builder/base';
import { Event, Modifier } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const THREELight = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.LIGHT
} = {} ) => {

  const instanceName = strings.makeFirstLetterUpperCase( `${ config.type }-light` );
  const light = new RENDERING_ENGINE[ instanceName ]( strings.makeInteger( ...config.args, ' ' ) );

  Modifier.setDynamicProperty( {
    object3d: light,
    rendering: 'three',
    parameter: config
  } );

  return Object.assign( light, {
    ...Event
  } );

};
