/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const Archetype = {

  extend: function ( ...fs ) { return [ ...fs ].reduce( ( result, f ) => f( result ), Object.assign( {}, { ...this } ) ) }

};
