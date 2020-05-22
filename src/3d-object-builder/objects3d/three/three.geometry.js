import { strings } from 'u3s';
import { CONFIG } from '=>/3d-object-builder/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const THREEGeometry = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.GEOMETRY
} = {} ) => {

  const instanceName = strings.makeFirstLetterUpperCase( `${ config.type }-geometry` );

  return new RENDERING_ENGINE[ instanceName ]( ...config.args );

};
