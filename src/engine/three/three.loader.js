import { is, strings } from 'u3s';
import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const loadTexture = loader => ( { name, url } ) => {

  const texture = loader.load( url );

  texture.name = name;

  return texture;

};

export const THREELoader = async ( RENDERING_ENGINE, { args, type } ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( type, 'loader' ) ]();
  const sources = is.array( args ) ? args : [ args ];
  const textureArgs = sources.map( loadTexture( loader ) );

  const textures = await Promise
    .all( textureArgs )
    .then( response => response )
    .catch( error => error );

  CALLBACKS.loaders.forEach( loader => loader( textures ) );

  return textures;

};
