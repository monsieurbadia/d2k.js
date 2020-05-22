import { is, strings } from 'u3s';
import { CONFIG } from '=>/3d-object-builder/base';
import { Chunk } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const THREEMaterial = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.MATERIAL
} = {} ) => {

  const instanceName = strings.makeFirstLetterUpperCase( `${ config.type }-material` );
  const uniforms = is.contains( uniforms ) ? Chunk.createUniforms( RENDERING_ENGINE, config.args.uniforms ) : {};
  const params = is.empty( uniforms ) ? config.args : { ...config.args, uniforms };

  if ( is.contains( params ) ) params.color = new RENDERING_ENGINE.Color( window.parseInt( config.args.color ) );

  return new RENDERING_ENGINE[ instanceName ]( params );

};
