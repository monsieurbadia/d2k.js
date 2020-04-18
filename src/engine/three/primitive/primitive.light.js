import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private TODO: move it */
const convert = str => str.split( ' ' ).map( value => window.parseInt( value ) );

/** @private */
const getLight = ( ENGINE, type, args ) => new ENGINE[ parseTextToFirstLetterUpperCase( type, 'light' ) ]( ...args );

/** @oublic */
export const THREELight = ( ENGINE, parameters ) => getLight( ENGINE, parameters.option.type, convert( ...parameters.option.args ) );
