import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private TODO: move it */
const convert = str => str.split( ' ' ).map( value => window.parseInt( value ) );

/** @oublic */
export const THREELight = ( ENGINE, parameters ) => {

  const instanceName = parseTextToFirstLetterUpperCase( parameters.option.type, 'light' );
  const light = new ENGINE[ instanceName ]( convert( ...parameters.option.args ) );
  
  return light;

};
