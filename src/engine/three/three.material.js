import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const UNIFORMS = {
  resolution: { type: 'v2', value: {} },
  time: { type: 'f', value: 1.0 }
};

const snoopAndInsert = args => {

  const INCLUDING_UNIFORMS = [ 'uniforms' ];

  const argUniforms = Object
    .keys( args )
    .filter( argUniform => INCLUDING_UNIFORMS.includes( argUniform ) )
    .reduce( ( result, key ) => ( {
      ...result,
      [ key ]: Object.keys( UNIFORMS ).reduce( ( r, k ) => ( { ...r,...args[ key ], [ k ]: UNIFORMS[ k ] } ), {} )
    } ), {} );

  return { ...args, ...argUniforms };

};

/** @public */
export const THREEMaterial = ( RENDERING_ENGINE, parameters ) => {
  
  const instanceName = strings.toFirstLetterUpperCaseReducer( parameters.type, 'material' );
  const argsParsed = { ...snoopAndInsert( parameters.args ) };
  const material = new RENDERING_ENGINE[ instanceName ]( argsParsed );

  return material;

};
