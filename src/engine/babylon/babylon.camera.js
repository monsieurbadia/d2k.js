import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONCamera = ( RENDERING_ENGINE, { name, config } ) => {

  const { canvas, scene } = RENDERING_ENGINE.coreData;
  const [ alpha, beta, radius, target ] = config.args;
  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'camera' );
  const camera = new RENDERING_ENGINE[ instanceName ](
    name, alpha, beta, radius, new RENDERING_ENGINE.Vector3.Zero( ...target ), scene
  );

  camera.setTarget( RENDERING_ENGINE.Vector3.Zero() );
  scene.activeCamera.attachControl( canvas, true );

  return camera;

};
