import { is, strings } from 'u3s';

import {
  BABYLONCamera,
  BABYLONController,
  BABYLONEngine,
  BABYLONLight,
  BABYLONMesh,
  BABYLONScene
} from '=>/3d-object-builder/objects3d/babylon';

import {
  THREECamera,
  THREEGLSL,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} from '=>/3d-object-builder/objects3d/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const OBJECTS3D = Object.freeze( {
  BABYLONCamera,
  BABYLONController,
  BABYLONLight,
  BABYLONMesh,
  BABYLONEngine,
  BABYLONScene,
  THREECamera,
  THREEGLSL,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} );

const oncreate = ( {
  conf,
  name,
  starter
} = {} ) => ( ...parameters ) => {

  if ( is.empty( conf[ name ] ) ) {

    conf[ name ] = {};

  };

  if ( is.array( parameters[ 0 ] ) ) {

    parameters = parameters[ 0 ];

  }

  const params = name === 'renderer' ? [ parameters[ 0 ] ] : parameters;

  return starter(
    Object.assign(
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

    const byDefinedPrimitive = primitive => is.contains( parameter[ primitive.name ] );

    const primitive = ( result, config ) => { 

      parameter[ config.name ].userData = { currentScene: config.sceneParent };

      return {
        ...result,
        [ config.name ]: parameter[ config.name ]
      };

    };

    return primitivesName
      .filter( byDefinedPrimitive )
      .reduce( primitive, {} );

  };

  if ( is.contains( selectedPrimitives.camera ) ) {

    composedScene.camera = Object.assign( {
        main: parameter.camera[ selectedPrimitives.camera.main ]
      },
      {
        others: selectedPrimitives.camera.others && getPrimitive( {
          primitivesName: selectedPrimitives.camera.others,
          parameter: parameter.camera
        } )
      } );

  }
  
  if ( is.contains( selectedPrimitives.uicomponent ) ) {

    composedScene.uicomponent = getPrimitive( {
      primitivesName: selectedPrimitives.uicomponent,
      parameter: parameter.uicomponent
    } );

  }

  if ( is.contains( selectedPrimitives.mesh ) ) {

    composedScene.mesh = getPrimitive( {
      primitivesName: selectedPrimitives.mesh,
      parameter: parameter.mesh
    } );

  }
  
  if ( is.contains( selectedPrimitives.light ) ) {

    composedScene.light = getPrimitive( {
      primitivesName: selectedPrimitives.light,
      parameter: parameter.light
    } );

  }
  
  if ( is.contains( selectedPrimitives.scene ) ) {

    composedScene.scene = Object.assign( {
        main: parameter.scene[ selectedPrimitives.scene.main ]
      },
      {
        others: selectedPrimitives.scene.others && getPrimitive( {
          primitivesName: selectedPrimitives.scene.others,
          parameter: parameter.scene
        } )
      } );

  }
  
  if ( is.contains( selectedPrimitives.renderer ) ) {

    composedScene.renderer = parameter.renderer[ selectedPrimitives.renderer ];

  } 
  
  if ( is.contains( selectedPrimitives.engine ) ) {

    composedScene.engine = parameter.engine[ selectedPrimitives.engine ];

  }

  return composedScene;

};

const createPrimitive = ( { parameters, key, RENDERING_ENGINE } ) => {

  const currentRenderingEngineName = RENDERING_ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const formatedInstanceName = strings.makeFirstLetterUpperCase( key );
  const currentInstanceName = `${ currentRenderingEngineName }${ formatedInstanceName }`;

  const primitive = ( result, parameter ) => {

    if ( is.contains( parameter.config ) ) parameter.config.name = parameter.name;
    if ( is.array( parameter.config ) ) parameter.config.forEach( conf => conf.name = parameter.name );

    return {
      ...result,
      [ parameter.name ]: OBJECTS3D[ currentInstanceName ]( { RENDERING_ENGINE, config: parameter.config } )
    };

  };

  return parameters.reduce( primitive, {} );

};

export const Creater = Object.freeze( {

  oncreate,
  composeScene,
  createPrimitive

} );
