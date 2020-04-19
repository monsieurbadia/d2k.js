// import { is, oftype } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
export const BABYLONCamera = ( ENGINE, parameters ) => {

  const camera = new ENGINE[ parseTextToFirstLetterUpperCase( parameters.option.type, 'camera' ) ]( "camera", new ENGINE.Vector3( 0, 0, 0 ), ENGINE.coreData.scene );

  ENGINE.coreData.scene.activeCamera.attachControl( ENGINE.coreData.engine.getRenderingCanvas(), false );
  ENGINE.coreData.scene.autoClear = false;

  return camera;

};
