import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @oublic */
export const THREELight = ( RENDERING_ENGINE, parameters ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ]( strings.ToInt( ...parameters.args, ' ' ) );
  
  return light;

};
