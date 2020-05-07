import { merge } from 'u3s';
import { CONFIG, SHADER } from '=>/base';
import { Chunk, Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEShader = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.SHADER
} = {} ) => {

  // TODO
  const uniform = Chunk.createUniforms( { RENDERING_ENGINE, uniforms: merge( CONFIG.THREE.SHADER.uniforms, config.uniforms ) } );
  const shaderChunk = Chunk.compile( { uniforms: uniform, fragmentShader: config.fragmentShader, vertexShader: config.vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( ...SHADER.GEOMETRY.args );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Event
  } );

};
