import { strings } from 'u3s';
import { CONFIG } from '=>/base';
import { Modifier } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREECamera = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.CAMERA
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'camera' );
  const parsedArgs = config.args.map( arg => arg === null || arg === undefined ? ( arg = window.innerWidth / window.innerHeight ) : arg );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parsedArgs );

  Modifier.setDynamicProperty( {
    object3d: camera,
    rendering: 'three',
    parameter: config
  } );

  return camera;

};
