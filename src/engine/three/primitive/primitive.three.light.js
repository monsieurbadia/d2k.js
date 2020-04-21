import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @oublic */
export const THREELight = ( ENGINE, parameters ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'light' );
  const light = new ENGINE[ instanceName ]( strings.ToInt( ...parameters.option.args, ' ' ) );
  
  return light;

};
