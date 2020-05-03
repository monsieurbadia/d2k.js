import { is, strings } from 'u3s';
import { Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONLight = ( {
  RENDERING_ENGINE,
  config = {
    args: [ 0, 1, 0 ],
    diffuse: [ 1, 1, 1 ],
    specular: [ 1, 1, 1 ],
    name: 'current',
    type: 'point'
  }
} = {} ) => {

  const light = {};
  const { scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'light' );

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

  if ( is.exist( config.diffuse ) ) light.diffuse = new RENDERING_ENGINE.Color3( ...config.diffuse );
  if ( is.exist( config.specular ) ) light.specular = new RENDERING_ENGINE.Color3( ...config.specular );

  return Object.assign( light.current, {
    ...Event
  } );

};
