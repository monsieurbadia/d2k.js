import { reducer } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '#/util/util.parser';

/** @private */
const convert = str => str.split( ' ' ).map( ( value ) => window.parseInt( value ) );

/** @private */
const getLight = ( THREE, type, args ) => new THREE[ parseTextToFirstLetterUpperCase( type, 'light' ) ]( ...args );

/** @private */
const Light = ( THREE, parameters ) => getLight( THREE, parameters.option.type, convert( ...parameters.option.args ) );

/** @public */
export const createLight = payload => ( {
  ...payload,
  light: reducer( payload.light, result => Light( payload.THREE, result ) )
} );
