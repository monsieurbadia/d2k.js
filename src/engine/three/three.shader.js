import { merge } from 'u3s';
import { SHADER } from '=>/base';
import { Chunk, Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEShader = ( RENDERING_ENGINE, { uniforms, fragmentShader, vertexShader } ) => {

  const uniform = Chunk.createUniforms( RENDERING_ENGINE, merge( SHADER.UNIFORMS, uniforms ) );
  const shaderChunk = Chunk.compile( { uniforms: uniform, fragmentShader, vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( ...SHADER.GEOMETRY.args );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Event
  } );

};
