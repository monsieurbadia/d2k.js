import { is, strings } from 'u3s';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMaterial = ( {
  RENDERING_ENGINE,
  config = {
    args: {
      transparent: false
    },
    type: 'mesh-normal'
  }
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'material' );
  const uniforms = is.exist( uniforms ) ? Chunk.createUniforms( RENDERING_ENGINE, config.args.uniforms ) : {};
  const params = is.empty( uniforms ) ? config.args : { ...config.args, uniforms };

  return new RENDERING_ENGINE[ instanceName ]( params );

};
