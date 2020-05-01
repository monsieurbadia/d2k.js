import { MESH } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const Modifier = Object.freeze( {

  setDynamicProperty: payload => properties =>  {

    const byValidDynamicProperty = key => MESH.THREE.DYNAMIC_PROPERTIES.includes( key );
    const setDynamicProperty = ( { mesh, parameter } ) => key => mesh[ key ].set( ...parameter[ key ] );

    return properties
    .filter( byValidDynamicProperty )
    .forEach( setDynamicProperty( payload ) );

  }

} );