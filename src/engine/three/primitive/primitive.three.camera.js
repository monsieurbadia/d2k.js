import { is, oftype } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const getCamera = ( ENGINE, type, args ) => new ENGINE[ parseTextToFirstLetterUpperCase( type, 'camera' ) ]( ...args );

/** @private */
export const THREECamera = ( ENGINE, parameters ) => {

  // TODO: check ENGINE before
  if ( oftype( parameters ) !== 'object' || is.empty( parameters ) ) console.assert( oftype( parameters ) === 'object', '"%s" is not an "array"', 'camera' );

  const camera = getCamera( ENGINE, parameters.option.type, parameters.option.args );

  camera.position.set( ...parameters.option.position );

  return camera;

};
