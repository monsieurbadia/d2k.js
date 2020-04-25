import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEGeometry = ( RENDERING_ENGINE, parameters ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.type, 'geometry' );

  return new RENDERING_ENGINE[ instanceName ]( ...parameters.args );

};
