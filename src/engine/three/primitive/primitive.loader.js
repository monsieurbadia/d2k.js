import { is } from 'u3s';
import { EVENTS } from '=>/core/core.events';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const getLoader = ( ENGINE, type ) => new ENGINE[ parseTextToFirstLetterUpperCase( type, 'loader' ) ];

/** @public */
export const THREELoader = ( ENGINE, parameters ) => {

  const loader = getLoader( ENGINE, parameters.option.type );
  const sources = !is.array( parameters.option.args ) ? [ parameters.option.args ] : parameters.option.args;
  const args = sources.map( async source => {
  
    const texture = loader.load( source.url );

    texture.name = source.name;

    return texture;

  } );

  return Promise.all( args ).then( response => EVENTS.loaders.forEach( loader => loader( response ) ) );

};
