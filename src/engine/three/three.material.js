import { is, strings } from 'u3s';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMaterial = ( RENDERING_ENGINE, parameter ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameter.type, 'material' );
  const uniforms = Chunk.createUniforms( RENDERING_ENGINE, parameter.args.uniforms );
  const params = is.empty( uniforms ) ? parameter.args : { ...parameter.args, uniforms };
  
  return new RENDERING_ENGINE[ instanceName ]( params );

};
