import { flatten, is, strings } from 'u3s';

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

const composeScene = ( { parameter, primitives } ) => {

  const composedScene = {};
  const cameras = flatten( Object.values( primitives.camera ) );
  const meshes = primitives.mesh;
  const lights = primitives.light;
  const renderers = primitives.renderer;

  composedScene.camera = cameras.reduce( ( result, value ) => ( {
    ...result,
    [ value ]: parameter.camera[ value ]
  } ), {} );

  composedScene.mesh = meshes.reduce( ( result, value ) => ( {
    ...result,
    [ value ]: parameter.mesh[ value ]
  } ), {} );

  composedScene.light = lights.reduce( ( result, value ) => ( {
    ...result,
    [ value ]: parameter.light[ value ]
  } ), {} );

  composedScene.renderer = parameter.renderer[ renderers ];

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
