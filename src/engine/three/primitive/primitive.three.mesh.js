import { is, oftype } from 'u3s';
import { onloader, onrender } from '=>/core/core.events';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from './primitive';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const DYNAMICS_PROPERTIES = [
  'position',
  'rotation',
  'scale'
];

/** @public */
export const THREEMesh = ( RENDERING_ENGINE, parameters ) => {

  const group = THREEGroup( RENDERING_ENGINE );
  const params = !is.array( parameters ) ? [ { ...parameters } ] : parameters;

  const mesh = params.map( parameter => {

    const geometry = THREEGeometry( RENDERING_ENGINE, parameter.geometry );
    const material = THREEMaterial( RENDERING_ENGINE, parameter.material );
    const currentMesh = new RENDERING_ENGINE.Mesh( geometry, material );

    Object
      .keys( parameter )
      .filter( key => DYNAMICS_PROPERTIES.includes( key ) )
      .forEach( key => currentMesh[ key ].set( ...parameter[ key ] ) );

    return oftype( parameters ) === 'array' ? group.add( currentMesh ) : currentMesh;

  } )[ 0 ];

  return Object.assign( mesh, {
    onloader,
    onrender
  } );

};
