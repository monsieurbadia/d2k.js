import { is, strings } from 'u3s';
import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREELoader = ( RENDERING_ENGINE, parameters ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( parameters.type, 'loader' ) ]();
  const sources = !is.array( parameters.args ) ? [ parameters.args ] : parameters.args;
  const args = sources.map( async source => {

    const texture = await loader.load( source.url );

    texture.name = source.name;

    return texture;

  } );

  return Promise.all( args ).then( response => CALLBACKS.loaders.forEach( loader => loader( response ) ) );

};
