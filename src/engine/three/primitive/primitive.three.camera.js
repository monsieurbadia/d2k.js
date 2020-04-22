import { is, oftype, strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( RENDERING_ENGINE, parameters ) => {

  if ( oftype( RENDERING_ENGINE ) !== 'object' || is.empty( RENDERING_ENGINE ) ) console.assert( oftype( RENDERING_ENGINE ) === 'object', '"%s" is not an "object"', 'camera' );

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'camera' );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parameters.option.args );

  camera.position.set( ...parameters.option.position );

  return camera;

};
