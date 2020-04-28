import { merge } from 'u3s';
import { SHADER } from '=>/base';
import { Chunk, Events } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEShader = ( RENDERING_ENGINE, parameter ) => {

  const { fragmentShader, vertexShader } = parameter;
  const uniforms = Chunk.createUniforms( RENDERING_ENGINE, merge( SHADER.UNIFORMS, parameter.uniforms ) );
  const shaderChunk = Chunk.compile( { uniforms, fragmentShader, vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( ...SHADER.GEOMETRY.args );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Events
  } );

};
