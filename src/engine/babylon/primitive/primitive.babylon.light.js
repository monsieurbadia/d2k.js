import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const BABYLONLight = ( ENGINE, parameters ) => {

  const light = new ENGINE[ parseTextToFirstLetterUpperCase( parameters.option.type, 'light' ) ]( "light", new BABYLON.Vector3( 0, -1, 0 ), ENGINE.d2kCoreData.scene );

  return light;

};
