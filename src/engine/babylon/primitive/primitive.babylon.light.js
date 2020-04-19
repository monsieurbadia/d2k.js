import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private TODO: make it generic. */
// const getLoader = ( ENGINE, type ) => new ENGINE[ parseTextToFirstLetterUpperCase( type, 'light' ) ]( null, true );

/** @public */
export const BABYLONLight = ( ENGINE, parameters ) => {

  const light = new ENGINE[ parseTextToFirstLetterUpperCase( parameters.option.type, 'light' ) ]( "light", new BABYLON.Vector3(0, -1, 0), ENGINE.coreData.scene );


  light.diffuse = new ENGINE.Color3( 1, 0, 0 );
  light.specular = new ENGINE.Color3( 1, 1, 1 );

  return light;

};
