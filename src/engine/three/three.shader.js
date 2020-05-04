import { merge } from 'u3s';
import { SHADER } from '=>/base';
import { Chunk, Event } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEShader = ( {
  RENDERING_ENGINE,
  config = {
    uniforms: {},
    fragmentShader: 'uniform vec2 resolution;\nuniform vec2 time;\nvoid main () {\n\tvec2 st = gl_FragCoord.xy / resolution.xy;\n\tgl_FragColor=vec4(st.x, st.y, 0.0, 1.0);\n}',
    vertexShader: 'void main () {\n\tgl_Position = vec4( position, 1.0 );\n}'
  }
} ) => {

  const uniform = Chunk.createUniforms( { RENDERING_ENGINE, uniforms: merge( SHADER.UNIFORMS, config.uniforms ) } );
  const shaderChunk = Chunk.compile( { uniforms: uniform, fragmentShader: config.fragmentShader, vertexShader: config.vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( ...SHADER.GEOMETRY.args );
  const material = new RENDERING_ENGINE.ShaderMaterial( shaderChunk );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    ...Event
  } );

};
