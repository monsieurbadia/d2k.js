import{ is, oftype, strings } from 'u3s';
import { Event, Modifier } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONMesh = ( {
  RENDERING_ENGINE,
  config = {
    args: { size: 0.20 },
    position: [ 0, 0, 0 ],
    type: 'box',
    material: {
      name: 'current-material',
      type: 'standard',
      emissiveColor: [ 0.1, 0.50, 0.75 ]
    }
  }
} = {} ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const group = Object.assign( RENDERING_ENGINE.MeshBuilder.CreateBox( config.name, { size: 1 }, scene ), { ...Event } );
  const parameters = !is.array( config ) ? [ { ...config } ] : config;
  const byValidParameter = parameter => oftype( parameter ) === 'object';

  group.isVisible = false;

  const mesh = parameters
    .filter( byValidParameter )
    .map( parameter => {

      const properties = Object.keys( parameter );
      const instanceName = strings.toFirstLetterUpperCaseReducer( 'create', parameter.type );
      const currentMesh = Object.assign( RENDERING_ENGINE.MeshBuilder[ instanceName ]( parameter.name, parameter.args, scene ), { ...Event } );
      const modifyDynamicProperty = Modifier.setDynamicProperty( { mesh: currentMesh, parameter } );

      modifyDynamicProperty( properties );

      if ( is.exist( parameter.material ) ) {

        const materialInstanceName = strings.toFirstLetterUpperCaseReducer( parameter.material.type, 'material' );
        const material = new RENDERING_ENGINE[ materialInstanceName ]( parameter.material.name, scene );
  
        currentMesh.material = material;
        currentMesh.material.emissiveColor = new RENDERING_ENGINE.Color3( ...parameter.material.emissiveColor );

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
