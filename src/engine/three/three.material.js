import { is, strings } from 'u3s';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMaterial = ( {
  RENDERING_ENGINE,
  config = {
    args: {
      color: 0x00ff00,
      transparent: false
    },
    type: 'mesh-normal'
  }
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'material' );
  const uniforms = is.exist( uniforms ) ? Chunk.createUniforms( RENDERING_ENGINE, config.args.uniforms ) : {};
  const params = is.empty( uniforms ) ? config.args : { ...config.args, uniforms };

  if ( is.exist( params.color ) ) params.color = new RENDERING_ENGINE.Color( window.parseInt( config.args.color ) );

  return new RENDERING_ENGINE[ instanceName ]( params );

};
