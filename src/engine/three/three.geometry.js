import { strings } from 'u3s';
import { CONFIG } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEGeometry = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.GEOMETRY
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'geometry' );

  return new RENDERING_ENGINE[ instanceName ]( ...config.args );

};
