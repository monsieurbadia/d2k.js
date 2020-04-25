import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONLight = ( RENDERING_ENGINE, parameters ) => {

  // TODO: args input: [ [ 0, 0, 0 ] ]
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'light' )
  const light = new RENDERING_ENGINE[ instanceName ]( 'light', new BABYLON.Vector3( 0, -1, 0 ), RENDERING_ENGINE.coreData.scene );

  return light;

};
