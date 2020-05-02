import { is } from 'u3s'
import { MESH } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const Modifier = Object.freeze( {

  setDynamicProperty: payload => properties => {

    const byValidDynamicProperty = key => MESH.THREE.DYNAMIC_PROPERTIES.includes( key );
    const setProperty = ( { mesh, parameter } ) => key => {
      
      if ( is.array( parameter[ key ] ) ) {
        mesh[ key ].set( ...parameter[ key ] )
      } else {
        mesh[ key ] = parameter[ key ];
      }

    };

    return properties
      .filter( byValidDynamicProperty )
      .forEach( setProperty( payload ) );

  }

} );