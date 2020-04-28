import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONCamera = ( RENDERING_ENGINE, parameter ) => {

  const { canvas, scene } = RENDERING_ENGINE.coreData;
  const [ alpha = false, beta = 1, radius = 1, target = [ 0, 0, 0 ] ] = parameter.args;
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameter.type, 'camera' );
  const camera = new RENDERING_ENGINE[ instanceName ](
    name, alpha, beta, radius, new RENDERING_ENGINE.Vector3.Zero( ...target ), scene
  );

  camera.setTarget( RENDERING_ENGINE.Vector3.Zero() );
  scene.activeCamera.attachControl( canvas, true );

  return camera;

};
