import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREELight = ( RENDERING_ENGINE, { args, name = 'light', type } ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ]( strings.ToInt( ...args, ' ' ) );
  
  light.name = name;

  return light;

};
