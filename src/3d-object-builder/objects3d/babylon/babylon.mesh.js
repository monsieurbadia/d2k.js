import{ is, oftype, strings } from 'u3s';
import { CONFIG } from '=>/3d-object-builder/base';
import { Event, Modifier } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const BABYLONMesh = ( {
  RENDERING_ENGINE,
  config = CONFIG.BABYLON.MESH
} = {} ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const group = Object.assign( RENDERING_ENGINE.MeshBuilder.CreateBox( config.name, { size: 1 }, scene ), { ...Event } );
  const parameters = !is.array( config ) ? [ { ...config } ] : config;
  const byValidParameter = parameter => oftype( parameter ) === 'object';

  group.isVisible = false;

  const mesh = parameters
    .filter( byValidParameter )
    .map( parameter => {

      const instanceName = strings.makeFirstLetterUpperCase( `create-${ parameter.type }` );
      const currentMesh = Object.assign( RENDERING_ENGINE.MeshBuilder[ instanceName ]( parameter.name, parameter.args, scene ), { ...Event } );

      Modifier.setDynamicProperty( {
        object3d: currentMesh,
        rendering: 'babylon',
        parameter
      } );

      if ( is.contains( parameter.material ) ) {

        const materialInstanceName = strings.makeFirstLetterUpperCase( `${ parameter.material.type }-material` );
        const material = new RENDERING_ENGINE[ materialInstanceName ]( parameter.material.name, scene );
  
        currentMesh.material = material;

        if ( parameter.material.emissiveColor ) {
          currentMesh.material.emissiveColor = new RENDERING_ENGINE.Color3( ...parameter.material.emissiveColor );
        }

      }

      if ( is.array( config ) ) {
        currentMesh.parent = group;
      }

      return is.array( config ) ? group : currentMesh;

    }, [] )[ 0 ];

  return Object.assign( mesh, {
    ...Event
  } );

};
