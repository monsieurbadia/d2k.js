import { is, oftype } from 'u3s';
import { CONFIG } from '=>/base';
import { Event, Modifier } from '=>/core';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEMesh = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.MESH
} = {} ) => {

  const group = THREEGroup( { RENDERING_ENGINE } );
  const parameters = !is.array( config ) ? [ { ...config } ] : config;
  const byValidParameter = parameter => oftype( parameter ) === 'object';

  const mesh = parameters
    .filter( byValidParameter )
    .map( parameter => {

      const geometry = THREEGeometry( { RENDERING_ENGINE, config: parameter.geometry } );
      const material = THREEMaterial( { RENDERING_ENGINE, config: parameter.material } );
      const currentMesh = Object.assign( new RENDERING_ENGINE.Mesh( geometry, material ), { ...Event } );

      Modifier.setDynamicProperty( {
        object3d: currentMesh,
        rendering: 'three',
        parameter
      } );

      return is.array( config ) ? group.add( currentMesh ) : currentMesh;

    }, [] )[ 0 ];

  return Object.assign( mesh, {
    ...Event
  } );

};
