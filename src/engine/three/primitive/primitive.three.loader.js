import { is } from 'u3s';
import { EVENTS } from '=>/core/core.events';
import { parseTextToFirstLetterUpperCase } from '=>/util/util';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREELoader = ( ENGINE, parameters ) => {

  const loader = new ENGINE[ parseTextToFirstLetterUpperCase( parameters.option.type, 'loader' ) ]();
  const sources = !is.array( parameters.option.args ) ? [ parameters.option.args ] : parameters.option.args;
  const args = sources.map( async source => {
  
    const texture = await loader.load( source.url );

    texture.name = source.name;

    return texture;

  } );

  return Promise.all( args ).then( response => EVENTS.loaders.forEach( loader => loader( response ) ) );

};
