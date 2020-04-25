import { strings } from 'u3s';
import { Chunk } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEMaterial = ( RENDERING_ENGINE, parameters ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.type, 'material' );
  const uniforms = Chunk.createUniforms( RENDERING_ENGINE, parameters.args.uniforms );
  const material = new RENDERING_ENGINE[ instanceName ]( { uniforms } );
  
  return material;

};
