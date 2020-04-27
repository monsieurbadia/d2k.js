import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( RENDERING_ENGINE, parameter ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameter.type, 'camera' );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parameter.args );

  camera.position.set( ...parameter.position );

  return camera;

};
