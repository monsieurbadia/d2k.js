import { strings } from 'u3s';
import { Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONLight = ( {
  RENDERING_ENGINE,
  config = {
    args: [ 0, 1, 0 ],
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
      config.name,
      new RENDERING_ENGINE.Vector3( ...position ),
      new RENDERING_ENGINE.Vector3( ...direction ),
      angle,
      exponent,
      scene
    );

  } else {

    light.current = new RENDERING_ENGINE[ instanceName ](
      config.name, new RENDERING_ENGINE.Vector3( ...config.args ), scene
    );

  }

  return Object.assign( light.current, {
    ...Event
  } );

};
