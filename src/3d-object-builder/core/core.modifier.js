import { is } from 'u3s'
import { OBJECTS3D } from '=>/3d-object-builder/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const Modifier = Object.freeze( {

  setDynamicProperty: payload => {

    const properties = Object.keys( payload.parameter );
    const rendering = payload.rendering.toUpperCase();
    const byValidDynamicProperty = key => OBJECTS3D[ rendering ].DYNAMIC_PROPERTIES.includes( key );
    const setProperty = ( { object3d, parameter } ) => key => {

      if ( is.array( parameter[ key ] ) ) {

        object3d[ key ].set( ...parameter[ key ] );

      } else {

        object3d[ key ] = parameter[ key ];

      }

    };

    return properties
      .filter( byValidDynamicProperty )
      .forEach( setProperty( payload ) );

  }

} );
