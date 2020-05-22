import { merge, is } from 'u3s';
import { CONFIG, GLSL } from '=>/3d-object-builder/base';
import { Chunk, Event } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const THREEGLSL = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.GLSL
} = {} ) => {

  // TODO: put geometry and material in cache
  const uniform = Chunk.createUniforms( { RENDERING_ENGINE, uniforms: merge( CONFIG.THREE.GLSL.uniforms, { ...config.uniforms } ) } );
  const shaderChunk = Chunk.compile( { uniforms: uniform, fragmentShader: config.fragmentShader, vertexShader: config.vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( ...GLSL.GEOMETRY.args );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Event
  } );

};
