import { is, strings } from 'u3s';
import { FS } from '=>/core/core.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREELoader = ( RENDERING_ENGINE, parameters ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( parameters.option.type, 'loader' ) ]();
  const sources = !is.array( parameters.option.args ) ? [ parameters.option.args ] : parameters.option.args;
  const args = sources.map( async source => {
  
    const texture = await loader.load( source.url );

    texture.name = source.name;

    return texture;

  } );

  return Promise.all( args ).then( response => FS.loaders.forEach( loader => loader( response ) ) );

};
