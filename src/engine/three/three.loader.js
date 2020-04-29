import { is, strings } from 'u3s';
import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const textures = loader => async ( { name, url } ) => {

  const texture = await loader.load( url );

  texture.name = name;

  return texture;

};

export const THREELoader = ( RENDERING_ENGINE, { args, type } ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( type, 'loader' ) ]();
  const sources = !is.array( args ) ? [ args ] : args;
  const textureArgs = sources.map( textures( loader ) );

  return Promise.all( textureArgs ).then( response => setTimeout( _=> CALLBACKS.loaders.forEach( loader => loader( response ) ) ), 0 );

};
