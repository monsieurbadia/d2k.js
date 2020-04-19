import { is } from 'u3s';
import { onloader, onrender } from '=>/core/core.events';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from './primitive';

import { getInstance } from '=>/util/util';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public TODO: split geometry and material */
export const THREEMesh = ( ENGINE, parameters ) => {

  if ( !is.array( parameters ) || is.empty( parameters ) ) return;

  const group = THREEGroup( ENGINE );

  const meshes = parameters.reduce( ( result, parameter ) => {

    const geometry = THREEGeometry( ENGINE, parameter.geometry );
    const material = THREEMaterial( ENGINE, parameter.material );
    const mesh = new ENGINE.Mesh( geometry, material );

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
