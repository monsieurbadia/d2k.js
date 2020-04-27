import { is } from 'u3s';
import { MATH, SHADER } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const createUniforms = ( RENDERING_ENGINE, uniforms ) => {

  if ( Object.keys( { ...uniforms } ).find( key => uniforms[ key ].type ) === undefined ) return uniforms;

  const byCoreUniforms = key => MATH.TYPES.includes( uniforms[ key ].type );
  const coreUniforms = ( result, key ) => {

    uniforms[ key ].value = new RENDERING_ENGINE[ MATH.PRIMITIVES[ uniforms[ key ].type ] ]( ...uniforms[ key ].value );

    return {
      ...result,
      [ key ]: uniforms[ key ]
    };

  };

  return Object
    .keys( uniforms )
    .filter( byCoreUniforms )
    .reduce( coreUniforms, uniforms );

};

const compile = chunks => {

  if ( is.empty( chunks ) ) return;

  const byShadeType = key => /Shader/i.test( key );
  const shadeParams = ( result, key ) => {

    const chunk = SHADER.TYPE[ key ];

    return {
      ...result,
      [ key ]: chunks[ key ].includes( chunk.name )
        ? chunks[ key ].replace( chunk.name, chunk.template )
        : chunks[ key ]
    };

  };

  return Object
    .keys( chunks )
    .filter( byShadeType )
    .reduce( shadeParams, chunks );

};

/** @public */
export const Chunk = {
  createUniforms,
  compile
};
