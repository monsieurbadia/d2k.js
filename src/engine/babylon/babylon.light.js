import { strings } from 'u3s';
import { Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONLight = ( { RENDERING_ENGINE, config: { args = [ 0, 0, 0 ], name, type = 'arc-to-rotate' } } ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ](
    name, new RENDERING_ENGINE.Vector3( ...args ), scene
  );

  return Object.assign( light, {
    ...Event
  } );

};
