import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEGeometry = ( RENDERING_ENGINE, parameter ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameter.type, 'geometry' );

  return new RENDERING_ENGINE[ instanceName ]( ...parameter.args );

};
