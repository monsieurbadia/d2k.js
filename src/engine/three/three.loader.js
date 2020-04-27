import { is, strings } from 'u3s';
import { CALLBACKS } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREELoader = ( RENDERING_ENGINE, parameter ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( parameter.type, 'loader' ) ]();
  const sources = !is.array( parameter.args ) ? [ parameter.args ] : parameter.args;
  const args = sources.map( async source => {

    // const methodName = `parse${ source.type ? toFirstLetterUpperCaseReducer( source.type ) : '' }`;
    // const texture = await source.parse ? loader[ methodName ]( source.url ) : loader.load( source.url );
    const texture = await loader.load( source.url );

    texture.name = source.name;

    return texture;

  } );

  return Promise.all( args ).then( response => setTimeout( _=> CALLBACKS.loaders.forEach( loader => loader( response ) ) ), 0 );

};
