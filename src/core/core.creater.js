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

const PRIMITIVE = {
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
};

const composeScene = ( { parameter, selectedPrimitives } ) => {

  const composedScene = {};

  const getPrimitives = ( { primitivesName, parameter } ) => {

    const primitive = ( result, value ) => ( {
      ...result,
      [ value ]: parameter[ value ]
    } );

    return primitivesName?.reduce( primitive, {} );

  };

  composedScene.camera = Object
    .assign(
      {
        main: parameter.camera[ selectedPrimitives.camera.main ]
      },
      {
        others: getPrimitives( {
          primitivesName: selectedPrimitives.camera.others,
          parameter: parameter.camera
        } )
      }
    );

  composedScene.mesh = getPrimitives( {
    primitivesName: selectedPrimitives.mesh,
    parameter: parameter.mesh
  } );

  composedScene.light = getPrimitives( {
    primitivesName: selectedPrimitives.light,
    parameter: parameter.light
  } );

  composedScene.renderer = parameter.renderer[ selectedPrimitives.renderer ];

  return composedScene;

};

const createPrimitive = ( parameters, key, RENDERING_ENGINE ) => {

  const currentRenderingEngineName = RENDERING_ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const currentInstanceName = `${ currentRenderingEngineName }${ strings.toFirstLetterUpperCase( key ) }`;

  const primitive = ( result, parameter ) => {

    if ( is.empty( parameter.config ) ) parameter.config = {};
    if ( is.array( parameter.config ) ) parameter.config.forEach( ( conf ) => conf.name = parameter.name );

    parameter.config.name = parameter.name;

    return {
      ...result,
      [ parameter.name ]: PRIMITIVE[ currentInstanceName ]( RENDERING_ENGINE, parameter.config )
    };

  };

  return parameters.reduce( primitive, {} );

};

/** @public */
export const Creater = {

  composeScene,
  createPrimitive

};
