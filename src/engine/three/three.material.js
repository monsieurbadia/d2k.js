import { is, strings } from 'u3s';
import { CONFIG } from '=>/base';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMaterial = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.MATERIAL
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'material' );
  const uniforms = is.exist( uniforms ) ? Chunk.createUniforms( RENDERING_ENGINE, config.args.uniforms ) : {};
  const params = is.empty( uniforms ) ? config.args : { ...config.args, uniforms };

  if ( is.exist( params ) ) params.color = new RENDERING_ENGINE.Color( window.parseInt( config.args.color ) );

  return new RENDERING_ENGINE[ instanceName ]( params );

};
