import { is, oftype } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( ENGINE, parameters ) => {

  if ( oftype( ENGINE ) !== 'object' || is.empty( ENGINE ) ) console.assert( oftype( ENGINE ) === 'object', '"%s" is not an "object"', 'camera' );

  const instanceName = parseTextToFirstLetterUpperCase( parameters.option.type, 'camera' );
  const camera = new ENGINE[ instanceName ]( ...parameters.option.args );

  camera.position.set( ...parameters.option.position );

  return camera;

};
