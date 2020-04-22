import { is, oftype, strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( RENDERING_ENGINE, parameters ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'camera' );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parameters.option.args );

  camera.position.set( ...parameters.option.position );

  return camera;

};
