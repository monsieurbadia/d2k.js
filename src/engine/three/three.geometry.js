import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEGeometry = ( RENDERING_ENGINE, { args, type } ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'geometry' );

  return new RENDERING_ENGINE[ instanceName ]( ...args );

};
