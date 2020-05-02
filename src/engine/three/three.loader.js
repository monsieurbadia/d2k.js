import { is, strings } from 'u3s';
import { CALLBACK } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const loadTexture = loader => ( { name, url } ) => {

  const texture = loader.load( url );

  texture.name = name;

  return texture;

};

export const THREELoader = async ( {
  RENDERING_ENGINE,
  config = {
    args: [],
    type: 'object'
  }
} = {} ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( config.type, 'loader' ) ]();
  const sources = is.array( config.args ) ? config.args : [ config.args ];
  const textureArgs = sources.map( loadTexture( loader ) );

  const textures = is.exist( textureArgs )
    ? await Promise
      .all( textureArgs )
      .then( response => response )
      .catch( error => error )
    : sources;

  CALLBACK.loaders.forEach( loader => loader( textures ) );

  return textures;

};
