import { reducer } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '#/util/util.parser';

/**
 * loader
 * 
 * @private
 */

const getLoader = ( THREE, type ) => new THREE[ parseTextToFirstLetterUpperCase( type, 'loader' ) ];

const Loader =  ( THREE, parameters ) => {

  const loader = getLoader( THREE, parameters.option.type );

  return  new Promise( async ( resolve, reject ) => await loader.load( ...parameters.option.arguments, resolve, null, reject ) );

};

/** @public */
export const createLoader = payload => {

  return {
    ...payload,
    loader: reducer( payload.loader, result => Loader( payload.THREE, result ) )
  };

};
