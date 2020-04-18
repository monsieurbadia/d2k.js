import { is, oftype, reducer } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '#/util/util.parser';

/** @private */
const getCamera = ( THREE, type, args ) => new THREE[ parseTextToFirstLetterUpperCase( type, 'camera' ) ]( ...args );

/** @private */
const Camera = ( THREE, parameters ) => {

  if ( oftype( parameters ) !== 'object' || is.empty( parameters ) ) return;

  const camera = getCamera( THREE, parameters.option.type, parameters.option.args );

  camera.position.set( ...parameters.option.position );

  return camera;

};

/** @public */
export const createCamera = payload => ( {
  ...payload,
  camera: reducer( payload.camera, result => Camera( payload.THREE, result ) )
} );
