// import { is, oftype } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
export const BABYLONCamera = ( ENGINE, parameters ) => {

  const camera = new ENGINE[ parseTextToFirstLetterUpperCase( parameters.option.type, 'camera' ) ](     "Camera",
    Math.PI / 2,
    Math.PI / 2,
    2,
    ENGINE.Vector3.Zero(),
    ENGINE.coreData.scene
  );

  camera.setTarget( ENGINE.Vector3.Zero() );

  ENGINE.coreData.scene.activeCamera.attachControl( ENGINE.coreData.engine.getRenderingCanvas(), true );
  ENGINE.coreData.scene.autoClear = false;

  return camera;

};
