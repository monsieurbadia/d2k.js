import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @oublic */
export const THREELight = ( RENDERING_ENGINE, parameter ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameter.type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ]( strings.ToInt( ...parameter.args, ' ' ) );
  
  light.name = parameter.name;

  return light;

};
