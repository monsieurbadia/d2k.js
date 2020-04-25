import { merge } from 'u3s';
import { SHADER } from '=>/base';
import { Chunk, Events } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEShader = ( RENDERING_ENGINE, parameters ) => {

  const { fragmentShader, vertexShader } = parameters;
  const uniforms = Chunk.createUniforms( RENDERING_ENGINE, merge( SHADER.UNIFORMS, parameters.uniforms ) );
  const shaderChunk = Chunk.compile( { uniforms, fragmentShader, vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( 2, 2 );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Events
  } );

};
