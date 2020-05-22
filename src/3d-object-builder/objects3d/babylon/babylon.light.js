import { is, strings } from 'u3s';
import { CONFIG } from '=>/3d-object-builder/base';
import { Event } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const BABYLONLight = ( {
  RENDERING_ENGINE,
  config = CONFIG.BABYLON.LIGHT
} = {} ) => {

  const light = {};
  const { scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.makeFirstLetterUpperCase( `${ config.type }-light` );

  if ( instanceName === 'SpotLight' ) {
    
    const [ position = [ 0, 0, 0, ], direction = [ 0, 0, 0 ], angle = 0, exponent = 2 ] = config.args;

    light.current = new RENDERING_ENGINE[ instanceName ](
      config.name, new RENDERING_ENGINE.Vector3( ...position ), new RENDERING_ENGINE.Vector3( ...direction ), angle, exponent, scene
    );

  } else {

    light.current = new RENDERING_ENGINE[ instanceName ](
      config.name, new RENDERING_ENGINE.Vector3( ...config.args ), scene
    );

  }

  if ( is.contains( config.diffuse ) ) light.diffuse = new RENDERING_ENGINE.Color3( ...config.diffuse );
  if ( is.contains( config.specular ) ) light.specular = new RENDERING_ENGINE.Color3( ...config.specular );

  return Object.assign( light.current, {
    ...Event
  } );

};
