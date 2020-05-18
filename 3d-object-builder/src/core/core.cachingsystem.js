import { oftype } from 'u3s';
import { OBJECTS3D } from '=>/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const CachingSystem = {

  get ( data ) { return OBJECTS3D.CACHE[ data.type ][ data.key ].clone(); },

  makeCache ( data ) {

    OBJECTS3D.CACHE[ data.type ] = {
      [ data.key ]: data.data
    };

    return OBJECTS3D.CACHE[ data.type ][ data.key ];

  },

  unmakeCache () {

    const makeCacheDelete = ( key, val ) => delete val[ key ];

    const makeDelete = array =>
      array.forEach( key => oftype( OBJECTS3D.CACHE[ key ] ) === 'object'
        ? makeCacheDelete( key, OBJECTS3D.CACHE )
        : makeDelete( Object.keys( OBJECTS3D.CACHE[ key ] ) )
    );

    makeDelete( Object.keys( OBJECTS3D.CACHE ) );

  }

};
