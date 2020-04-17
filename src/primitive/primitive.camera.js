import { reducer } from 'u3s';

/** @private */
const Camera = ( THREE, parameters ) => {

  const instanceName = parameters.option.type === 'default' ? 'Camera' : parameters.option.type;
  const camera = new THREE[ 'PerspectiveCamera' ]( ...parameters.option.arguments );

  camera.position.set( ...parameters.option.position );

  return camera;

};

/** @public */
export const createCamera = payload => ( {
  ...payload,
  camera: reducer( payload.camera, result => Camera( payload.THREE, result ) )
} );
