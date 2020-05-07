import { is } from 'u3s';
import { MATH, SHADER } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const createUniforms = ( { RENDERING_ENGINE, uniforms } = {} ) => {

  if ( is.include( uniforms, 'type' ) ) return uniforms;

  const byCoreUniforms = key => MATH.TYPES.includes( uniforms[ key ].type );
  const coreUniforms = ( result, key ) => {

    const uniform = uniforms[ key ];
    const instanceName = MATH.PRIMITIVES[ uniform.type ];

    uniform.value = new RENDERING_ENGINE[ instanceName ]( ...uniform.value );

    return {
      ...result,
      [ key ]: uniform
    };

  };

  return Object
    .keys( uniforms )
    .filter( byCoreUniforms )
    .reduce( coreUniforms, uniforms );

};

const compile = chunks => {

  if ( is.empty( chunks ) ) return;

  const byShaderType = key => /Shader/i.test( key );
  const shaderParams = ( result, key ) => {

    const shaderToInclude = SHADER.TYPE[ key ];
    const shaderCurrent = chunks[ key ];

    return {
      ...result,
      [ key ]: is.include( shaderCurrent, shaderToInclude.name )
        ? shaderCurrent.replace( shaderToInclude.name, shaderToInclude.template )
        : shaderCurrent
    };

  };

  return Object
    .keys( chunks )
    .filter( byShaderType )
    .reduce( shaderParams, chunks );

};

export const Chunk = Object.freeze( {

  createUniforms,
  compile

} );
