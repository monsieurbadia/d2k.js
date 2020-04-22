import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONCamera = ( RENDERING_ENGINE, { name, config } ) => {

  // TODO:
  const { canvas, scene } = RENDERING_ENGINE.coreData;
  const camera = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( config.option.type, 'camera' ) ](
    name,
    Math.PI / 2,
    Math.PI / 2,
    2,
    RENDERING_ENGINE.Vector3.Zero(),
    scene
  );

  camera.setTarget( RENDERING_ENGINE.Vector3.Zero() );
  scene.activeCamera.attachControl( canvas, true );

  return camera;

};
