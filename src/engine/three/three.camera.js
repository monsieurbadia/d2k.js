import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( RENDERING_ENGINE, parameters ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.type, 'camera' );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parameters.args );

  camera.position.set( ...parameters.position );

  return camera;

};
