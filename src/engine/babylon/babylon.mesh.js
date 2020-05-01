import{ is, oftype, strings } from 'u3s';
import { Event, Modifier } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONMesh = ( { RENDERING_ENGINE, config } ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.toFirstLetterUpperCaseReducer( 'create', config.type );
  const parameters = !is.array( config ) ? [ { ...config } ] : config;
  const byValidParameter = parameter => oftype( parameter ) === 'object';

  const mesh = parameters
    .filter( byValidParameter )
    .reduce( ( result, parameter ) => {

      const properties = Object.keys( parameter );
      const currentMesh = Object.assign( RENDERING_ENGINE.MeshBuilder[ instanceName ]( name, parameter.args, scene ), { ...Event } );
      const modifyDynamicProperty = Modifier.setDynamicProperty( { mesh: currentMesh, parameter } );

      modifyDynamicProperty( properties );

      if ( is.exist( parameter.material ) ) {

        // TODO
        const materialInstanceName = strings.toFirstLetterUpperCaseReducer( parameter.material.type, 'material' );
        const material = new RENDERING_ENGINE[ materialInstanceName ]( parameter.material.name, scene );
  
        currentMesh.material = material;
        currentMesh.material.emissiveColor = new RENDERING_ENGINE.Color3( ...parameter.material.emissiveColor );

      }

      return {
        ...result,
        [ parameter.name ]: currentMesh
      };

    }, {} );

  return Object.assign( mesh[ config.name ], {
    ...Event
  } );

};
