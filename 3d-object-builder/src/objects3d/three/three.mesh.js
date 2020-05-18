import { is, oftype, strings } from 'u3s';
import { CONFIG, OBJECTS3D } from '=>/base';
import { Event, Modifier } from '=>/core';

import {
  THREEGeometry,
  THREEGroup,
  THREEMaterial
} from '=>/objects3d/three';

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

      const materialInstanceName = strings.toFirstLetterUpperCaseReducer( parameter.material.type );
      const geometryInstanceName = strings.toFirstLetterUpperCaseReducer( parameter.geometry.type );
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
