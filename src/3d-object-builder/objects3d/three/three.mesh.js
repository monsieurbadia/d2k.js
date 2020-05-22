import { is, oftype, strings } from 'u3s';
import { CONFIG, OBJECTS3D } from '=>/3d-object-builder/base';
import { Event, Modifier } from '=>/3d-object-builder/core';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from '=>/3d-object-builder/objects3d/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com
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

      const materialInstanceName = strings.makeFirstLetterUpperCase( parameter.material.type );
      const geometryInstanceName = strings.makeFirstLetterUpperCase( parameter.geometry.type );
      const materialHasBeenCreatedBefore = is.include( OBJECTS3D.CACHE.material, materialInstanceName );
      const geometryHasBeenCreatedBefore = is.include( OBJECTS3D.CACHE.geometry, geometryInstanceName );
      const geometry = geometryHasBeenCreatedBefore ? OBJECTS3D.CACHE.geometry[ geometryInstanceName ] : THREEGeometry( { RENDERING_ENGINE, config: parameter.geometry } );
      const material = materialHasBeenCreatedBefore ? OBJECTS3D.CACHE.material[ materialInstanceName ] : THREEMaterial( { RENDERING_ENGINE, config: parameter.material } );
      const currentMesh = Object.assign( new RENDERING_ENGINE.Mesh( geometry, material ), { ...Event } );

      OBJECTS3D.CACHE.geometry = { [ geometryInstanceName ]: geometry };
      OBJECTS3D.CACHE.material = { [ materialInstanceName ]: material };

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
