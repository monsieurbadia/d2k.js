import { is, strings } from 'u3s';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMaterial = ( RENDERING_ENGINE, { args, type, } ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'material' );
  const uniforms = Chunk.createUniforms( RENDERING_ENGINE, args.uniforms );
  const params = is.empty( uniforms ) ? args : { ...args, uniforms };
  
  return new RENDERING_ENGINE[ instanceName ]( params );

};
