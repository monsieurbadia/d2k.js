import { is, oftype, strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( ENGINE, parameters ) => {

  if ( oftype( ENGINE ) !== 'object' || is.empty( ENGINE ) ) console.assert( oftype( ENGINE ) === 'object', '"%s" is not an "object"', 'camera' );

  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'camera' );
  const camera = new ENGINE[ instanceName ]( ...parameters.option.args );

  camera.position.set( ...parameters.option.position );

  return camera;

};
