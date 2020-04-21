import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONCamera = ( ENGINE, parameters ) => {

  // TODO:
  const { canvas, scene } = ENGINE.coreData;
  const camera = new ENGINE[ strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'camera' ) ](
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    ENGINE.Vector3.Zero(),
    scene
  );

  camera.setTarget( ENGINE.Vector3.Zero() );
  scene.activeCamera.attachControl( canvas, true );

  return camera;

};
