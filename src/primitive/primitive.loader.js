import { reducer } from 'u3s';
import { EVENTS } from '#/base/base.events';
import { parseTextToFirstLetterUpperCase } from '#/util/util.parser';

/**
 * loader
 * 
 * @private
 */

const getLoader = ( THREE, type ) => new THREE[ parseTextToFirstLetterUpperCase( type, 'loader' ) ];

const Loader = ( THREE, parameters ) => {

  const loader = getLoader( THREE, parameters.option.type );

  return new Promise( ( resolve, reject ) =>
    loader.load( ...parameters.option.args, resolve, null, reject ) )
      .then( response => EVENTS.loaders.forEach( loader => loader( response ) ) );

};

/** @public */
export const createLoader = payload => {

  return {
    ...payload,
    loader: reducer( payload.loader, result => Loader( payload.THREE, result ) )
  };

};
