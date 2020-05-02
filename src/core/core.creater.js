import { is, strings } from 'u3s';

import {
  BABYLONCamera,
  BABYLONEngine,
  BABYLONLight,
  BABYLONMesh,
  BABYLONScene
} from '=>/engine/babylon';

import {
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const PRIMITIVE = Object.freeze( {
  BABYLONCamera,
  BABYLONLight,
  BABYLONMesh,
  BABYLONEngine,
  BABYLONScene,
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} );

const oncreate = ( { conf, name, starter } ) => ( ...parameters ) => {

  if ( is.empty( conf[ name ] ) ) {

    conf[ name ] = {};

  };

  const params = name === 'renderer' ? [ parameters[ 0 ] ] : parameters;

  return starter(
    Object
      .assign(
        conf,
        {
          [ name ]: createPrimitive( {
            parameters: params,
            key: name,
            RENDERING_ENGINE: conf.RENDERING_ENGINE
          } )
        }
      )
    );

};

const composeScene = ( { parameter, selectedPrimitives } ) => {

  const composedScene = Object.create( null );

  const getPrimitive = ( { primitivesName, parameter } ) => {

    const byDefinedPrimitives = primitive => is.exist( parameter[ primitive.name ] );
    const primitive = ( result, config ) => { 

      parameter[ config.name ].userData = { currentScene: config.parent };

      return {
        ...result,
        [ config.name ]: parameter[ config.name ]
      };
    
    };

    return primitivesName
      .filter( byDefinedPrimitives )
      .reduce( primitive, {} );

  };

  composedScene.camera = Object
    .assign(
      {
        main: parameter.camera[ selectedPrimitives.camera.main ]
      },
      {
        others: getPrimitive( {
          primitivesName: selectedPrimitives.camera.others,
          parameter: parameter.camera
        } )
      }
    );

  composedScene.mesh = getPrimitive( {
    primitivesName: selectedPrimitives.mesh,
    parameter: parameter.mesh
  } );

  composedScene.light = getPrimitive( {
    primitivesName: selectedPrimitives.light,
    parameter: parameter.light
  } );

  composedScene.renderer = parameter.renderer[ selectedPrimitives.renderer ];

  composedScene.scene = Object
    .assign(
      {
        main: parameter.scene[ selectedPrimitives.scene.main ]
      },
      {
        others: getPrimitive( {
          primitivesName: selectedPrimitives.scene.others,
          parameter: parameter.scene
        } )
      }
    );

  return composedScene;

};

const createPrimitive = ( { parameters, key, RENDERING_ENGINE } ) => {

  const currentRenderingEngineName = RENDERING_ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const currentInstanceName = `${ currentRenderingEngineName }${ strings.toFirstLetterUpperCase( key ) }`;

  const primitive = ( result, parameter ) => {

    if ( is.empty( parameter.config ) ) parameter.config = {};
    if ( is.array( parameter.config ) ) parameter.config.forEach( conf => conf.name = parameter.name );

    parameter.config.name = parameter.name;

    return {
      ...result,
      [ parameter.name ]: PRIMITIVE[ currentInstanceName ]( { RENDERING_ENGINE, config: parameter.config } )
    };

  };

  return parameters.reduce( primitive, {} );

};

export const Creater = Object.freeze( {

  oncreate,
  composeScene,
  createPrimitive

} );
