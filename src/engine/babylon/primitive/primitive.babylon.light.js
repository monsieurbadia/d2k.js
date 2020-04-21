import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONLight = ( ENGINE, parameters ) => {

  // TODO:
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'light' )
  const light = new ENGINE[ instanceName ]( 'light', new BABYLON.Vector3( 0, -1, 0 ), ENGINE.coreData.scene );

  return light;

};
