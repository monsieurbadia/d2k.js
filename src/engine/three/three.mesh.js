import { is, oftype } from 'u3s';
import { Events } from '=>/core';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const DYNAMICS_PROPERTIES = [
  'position',
  'rotation',
  'scale'
];

export const THREEMesh = ( RENDERING_ENGINE, parameter ) => {

  const group = THREEGroup( RENDERING_ENGINE );
  const params = !is.array( parameter ) ? [ { ...parameter } ] : parameter;
  const byValidParameter = param => oftype( param ) === 'object'

  const mesh = params
    .filter( byValidParameter )
    .reduce( ( result, param ) => {

      const geometry = THREEGeometry( RENDERING_ENGINE, param.geometry );
      const material = THREEMaterial( RENDERING_ENGINE, param.material );
      const currentMesh = new RENDERING_ENGINE.Mesh( geometry, material );

      Object
        .keys( param )
        .filter( key => DYNAMICS_PROPERTIES.includes( key ) )
        .forEach( key => currentMesh[ key ].set( ...param[ key ] ) );

      Object
        .assign( currentMesh, {
          ...Events
        } );

      return {
        ...result,
        [ param.name ]: oftype( parameter ) === 'array' ? group.add( currentMesh ) : currentMesh
      };

    }, {} );

  return Object.assign( mesh[ parameter.name ], {
    ...Events
  } );

};
