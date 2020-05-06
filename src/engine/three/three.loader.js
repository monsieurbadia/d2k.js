import { is, strings } from 'u3s';
import { CALLBACK } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const loadPromiseData = loader => async ( { name, url } ) => {

  const data = await loader.load( url );

  data.name = name;
  
  return data;

};

export const THREELoader = ( {
  RENDERING_ENGINE,
  config = {
    args: [],
    type: 'object'
  }
} = {} ) => {

  const loader = new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( config.type, 'loader' ) ]();
  const sources = is.array( config.args ) ? config.args : [ config.args ];
  const operations = sources.map( loadPromiseData( loader ) );

  console.log( operations)
  return Promise.all( operations ).then( data => {

    setTimeout( _ => CALLBACK.loaders.forEach( loader => loader( data ) ), 100 );

    return data;

  } );

};
