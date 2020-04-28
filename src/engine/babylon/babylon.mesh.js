import{ is, oftype, strings } from 'u3s';
import { MESH } from '=>/base';
import { Events } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONMesh = ( RENDERING_ENGINE, parameter ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.toFirstLetterUpperCaseReducer( 'create', parameter.type );
  const params = !is.array( parameter ) ? [ { ...parameter } ] : parameter;
  const byValidParameter = param => oftype( param ) === 'object';

  const mesh = params
    .filter( byValidParameter )
    .reduce( ( result, param ) => {

      const currentMesh = RENDERING_ENGINE.MeshBuilder[ instanceName ]( name, param.args, scene );
      
      if ( is.exist( param.material ) ) {

        const materialInstanceName = strings.toFirstLetterUpperCaseReducer( param.material.type, 'material' );
        
        currentMesh.material = new RENDERING_ENGINE[ materialInstanceName ]( param.material.name, scene );
        currentMesh.material.emissiveColor = new RENDERING_ENGINE.Color3( ...param.material.emissiveColor );

      }

      Object
        .keys( param )
        .filter( key => MESH.DYNAMICS_PROPERTIES.includes( key ) )
        .forEach( key => currentMesh[ key ].set( ...param[ key ] ) );

      Object
        .assign( currentMesh, {
          ...Events
        } );

      return {
        ...result,
        [ param.name ]: oftype( param ) === 'array' ? group.add( currentMesh ) : currentMesh
      };

    }, {} );

  return Object.assign( mesh[ parameter.name ], {
    ...Events
  } );

};
