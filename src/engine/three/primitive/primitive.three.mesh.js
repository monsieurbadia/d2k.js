import { is } from 'u3s';
import { onloader, onrender } from '=>/core/core.events';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from './primitive';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEMesh = ( RENDERING_ENGINE, parameters ) => {

  if ( !is.array( parameters ) || is.empty( parameters ) ) return;

  const group = THREEGroup( RENDERING_ENGINE );

  const meshes = parameters.reduce( ( result, parameter ) => {

    const geometry = THREEGeometry( RENDERING_ENGINE, parameter.geometry );
    const material = THREEMaterial( RENDERING_ENGINE, parameter.material );
    const mesh = new RENDERING_ENGINE.Mesh( geometry, material );

    mesh.position.set( ...parameter.positions );

    return [
      ...result,
      parameter.group ? group.add( mesh ) : mesh
    ];

  }, [] );

  return Object.assign( meshes[ 0 ], {
    onloader,
    onrender
  } );

};
