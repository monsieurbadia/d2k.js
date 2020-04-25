import { merge } from 'u3s';
import { MATH, SHADER } from '=>/base';
import { Events } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const createUniforms = ( RENDERING_ENGINE, uniforms ) => {

  const byCoreUniforms = key => MATH.TYPES.includes( uniforms[ key ].type );
  const coreUniforms = ( result, key ) => {

    uniforms[ key ].value = new RENDERING_ENGINE[ MATH.PRIMITIVES[ uniforms[ key ].type ] ]( ...uniforms[ key ].value );

    return {
      ...result,
      [ key ]: uniforms[ key ]
    };

  };

  return {
    ...Object
      .keys( uniforms )
      .filter( byCoreUniforms )
      .reduce( coreUniforms, {} ),
    time: uniforms.time
   };

};

const compile = chunks => {

  const byShadeType = key => /Shader/i.test( key );
  const shadeParams = ( result, key ) => {

    const chunk = SHADER.TYPE[ key.replace( /Shader/, '' ) ];

    return {
      ...result,
      [ key ]: chunks[ key ].includes( chunk.name )
        ? chunks[ key ].replace( chunk.name, chunk.template )
        : chunks[ key ]
    };

  };

  return {
    ...Object
      .keys( { ...chunks } )
      .filter( byShadeType )
      .reduce( shadeParams, {} ),
    uniforms: chunks.uniforms
  };

};

/**
 * three shader
 * 
 * @public
 */

export const THREEShader = ( RENDERING_ENGINE, parameters ) => {

  const uniforms = createUniforms( RENDERING_ENGINE, merge( SHADER.UNIFORMS, parameters.uniforms ) );
  const fragmentShader = parameters.fragment;
  const vertexShader = parameters.vertex;
  const shaderChunk = compile( { uniforms, fragmentShader, vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( 2, 2 );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Events
  } );

};
