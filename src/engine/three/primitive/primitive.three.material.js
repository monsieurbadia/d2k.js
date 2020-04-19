import { parseTextToFirstLetterUpperCase } from '=>/util/util';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const UNIFORMS = {
  resolution: { type: 'v2', value: {} },
  time: { type: 'f', value: 1.0 }
};

/** @private */
const snoopAndInsert = args => {

  const validProperties = [ 'uniforms' ];

  const argUniforms = Object
    .keys( args )
    .filter( argUniform => validProperties.includes( argUniform ) )
    .reduce( ( result, key ) => ( {
      ...result,
      [ key ]: Object.keys( UNIFORMS ).reduce( ( r, k ) => ( { ...r,...args[ key ], [ k ]: UNIFORMS[ k ] } ), {} )
    } ), {} );

    return { ...args, ...argUniforms };

};

/** @public */
export const THREEMaterial = ( ENGINE, parameters ) => {
  
  const instaneName = parseTextToFirstLetterUpperCase( parameters.type, 'material' );
  const argsParsed = { ...snoopAndInsert( parameters.args ) };
  const material = new ENGINE[ instaneName ]( argsParsed );

  return material;

};
