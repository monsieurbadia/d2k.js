import { strings } from 'u3s';
import { Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONLight = ( RENDERING_ENGINE, { args = [ 0, 0, 0 ], type = 'arc-to-rotate' } ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ](
    'light', new RENDERING_ENGINE.Vector3( ...args ), scene
  );

  return Object.assign( light, {
    ...Event
  } );

};
