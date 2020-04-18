import { reducer } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/** @private */
const convert = str => str.split( ' ' ).map( value => window.parseInt( value ) );

/** @private */
const getLight = ( ENGINE, type, args ) => new ENGINE[ parseTextToFirstLetterUpperCase( type, 'light' ) ]( ...args );

/** @private */
const Light = ( ENGINE, parameters ) => getLight( ENGINE, parameters.option.type, convert( ...parameters.option.args ) );

/** @public */
export const createLight = payload => ( {
  ...payload,
  light: reducer( payload.light, result => Light( payload.ENGINE, result ) )
} );
