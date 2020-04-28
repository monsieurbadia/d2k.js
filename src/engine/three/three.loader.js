import { is, strings } from 'u3s';
import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const textures = loader => async source => {

  const texture = await loader.load( source.url );

  texture.name = source.name;

  return texture;

};

export const THREELoader = ( RENDERING_ENGINE, parameter ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( parameter.type, 'loader' ) ]();
  const sources = !is.array( parameter.args ) ? [ parameter.args ] : parameter.args;
  const args = sources.map( textures( loader ) );

  return Promise.all( args ).then( response => setTimeout( _=> CALLBACKS.loaders.forEach( loader => loader( response ) ) ), 0 );

};
