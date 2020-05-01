import { is, strings } from 'u3s';
import { __ } from '=>/base';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMaterial = ( { RENDERING_ENGINE, config: { args, type, } } ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'material' );
  const uniforms = is.exist( uniforms ) ? Chunk.createUniforms( RENDERING_ENGINE, args.uniforms ) : __.OBJECT;
  const params = is.empty( uniforms ) ? args : { ...args, uniforms };

  return new RENDERING_ENGINE[ instanceName ]( params );

};
