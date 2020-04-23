import {
  is,
  flatten
} from 'u3s';

import {
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} from '=>/engine/three/primitive/primitive';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const composeScene = ( { scene, primitives } ) => {

  const composedScene = {};
  const cameras = flatten( Object.values( primitives.camera ) );
  const meshes = primitives.mesh;
  const lights = primitives.light;
  const renderers = primitives.renderer;

  composedScene.camera = cameras.reduce( ( result, value ) => ( {
    ...result,
    [ value ]: scene.camera[ value ]
  } ), {} );

  composedScene.mesh = meshes.reduce( ( result, value ) => ( {
    ...result,
    [ value ]: scene.mesh[ value ]
  } ), {} );

  composedScene.light = lights.reduce( ( result, value ) => ( {
    ...result,
    [ value ]: scene.light[ value ]
  } ), {} );

  composedScene.renderer = scene.renderer[ renderers ];

  return composedScene;

};

/** @public */
export const onthreestarter = ( init = {} ) => {

  const conf = init;

  const withCamera = ( { name, config } ) => {

    if ( is.empty( conf.camera ) ) {
      conf.camera = {};
    }

    conf.camera[ name ] = THREECamera( conf.RENDERING_ENGINE, config );

    return onthreestarter( conf );

  };

  const withLight = ( { name, config } ) => {

    if ( is.empty( conf.light ) ) {
      conf.light = {};
    }

    conf.light[ name ] = THREELight( conf.RENDERING_ENGINE, config );

    return onthreestarter( conf );

  };

  const withMesh = ( { name, config } ) => {

    if ( is.empty( conf.mesh ) ) {
      conf.mesh = {};
    }

    conf.mesh[ name ] = THREEMesh( conf.RENDERING_ENGINE, config );

    return onthreestarter( conf );

  };

  const withLoader = ( { name, config } ) => {

    if ( is.empty( conf.loader ) ) {
      conf.loader = {};
    }

    conf.loader[ name ] = THREELoader( conf.RENDERING_ENGINE, config );

    return onthreestarter( conf );

  };

  const withRenderer = ( { name, config } ) => {

    if ( is.empty( conf.renderer ) ) {
      conf.renderer = {};
    }

    conf.renderer[ name ] = THREERenderer( conf.RENDERING_ENGINE, config );

    return onthreestarter( conf );

  };

  const withScene = ( { name, config } ) => {

    if ( is.empty( conf.scene ) ) {

      conf.scene = {};

    }

    const scene = THREEScene( conf.RENDERING_ENGINE, config );
    const starter = composeScene( { scene: conf, primitives: config } );

    conf.scene[ name ] = scene;

    Object.keys( starter.mesh ).forEach( key => scene.add( starter.mesh[ key ] ) );
    starter.renderer.onrender( { renderer: starter.renderer, scene, camera: starter.camera.current } );

    return onthreestarter( conf );

  };

  const value = _ => conf;

  return {
    withCamera,
    withLight,
    withLoader,
    withMesh,
    withRenderer,
    withScene,
    value,
  };

};
