import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONLight = ( RENDERING_ENGINE, parameters ) => {

  const { args, type } = parameters.option;
  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'light' )
  const light = new RENDERING_ENGINE[ instanceName ]( 'light', new RENDERING_ENGINE.Vector3( ...args ), RENDERING_ENGINE.coreData.scene );

  return light;

};
