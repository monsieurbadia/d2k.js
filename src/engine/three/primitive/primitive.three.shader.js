import { merge } from 'u3s';
import { MATH, SHADER } from '=>/engine/three/base/base';
import { onloader, onrender } from '=>/core/core.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const createUniforms = ( RENDERING_ENGINE, uniforms ) => 
  Object.keys( { ...uniforms } ).reduce( ( result, key ) => {

    const uniform = uniforms[ key ];

    if ( MATH.TYPES.includes( uniform.type ) ) {

      const { type, value } = uniform;
      const name = MATH.PRIMITIVES[ type ];

      uniform.value = new RENDERING_ENGINE[ name ]();

      if ( value.length > 0 ) uniform.value.set( ...value );

    }

    return {
      ...result,
      [ key ]: uniform
    };
  
  }, {} );

/** @private */
const compile = shade =>
  Object.keys( shade ).reduce( ( result, key ) => {

    const core = SHADER.TYPE[ key.replace( /Shader/, '' ) ];

    if ( core ) {

      const current = shade[ `${ core.type }Shader` ];

      return {
        ...result,
        [ key ]: current.includes( core.name ) ? current.replace( core.name, core.template ) : current
      };

    }

    return {
      ...result,
      [ key ]: shade[ key ]
    };

  }, {} );

/**
 * three shader
 * 
 * @public
 */

export const THREEShader = ( RENDERING_ENGINE, parameters ) => {

  const uniforms = createUniforms( RENDERING_ENGINE, merge( SHADER.UNIFORMS, parameters.uniforms ) );
  const fragmentShader = parameters.fragment;
  const vertexShader = parameters.vertex;
  const shade = compile( { uniforms, fragmentShader, vertexShader } );
  const geometry = new RENDERING_ENGINE.PlaneBufferGeometry( 2, 2 );
  const material = new RENDERING_ENGINE.ShaderMaterial( shade );
  const shader = new RENDERING_ENGINE.Mesh( geometry, material );

  return Object.assign( shader, {
    onloader,
    onrender
  } );

};
