import { is, merge } from 'u3s';
import { Creater } from '=>/core';
import { THREEScene } from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const onthreestarter = ( init = {} ) => {

  const conf = init;

  const withCamera = ( ...parameters ) => {

    if ( is.empty( conf.camera ) ) {

      conf.camera = {};
      
    }

    conf.camera = Creater.createPrimitive( parameters, 'camera', conf.RENDERING_ENGINE );

    return onthreestarter( conf );

  };

  const withLight = ( ...parameters ) => {

    if ( is.empty( conf.light ) ) {

      conf.light = {};
      
    }

    conf.light = Creater.createPrimitive( parameters, 'light', conf.RENDERING_ENGINE );

    return onthreestarter( conf );

  };

  const withMesh = ( ...parameters ) => {

    if ( is.empty( conf.mesh ) ) {

      conf.mesh = {};
      
    }

    conf.mesh = Creater.createPrimitive( parameters, 'mesh', conf.RENDERING_ENGINE );

    return onthreestarter( conf );

  };

  const withLoader = ( ...parameters ) => {

    if ( is.empty( conf.loader ) ) {

      conf.loader = {};
      
    }

    conf.loader = Creater.createPrimitive( parameters, 'loader', conf.RENDERING_ENGINE );

    return onthreestarter( conf );

  };

  const withRenderer = ( ...parameters ) => {

    if ( is.empty( conf.renderer ) ) {

      conf.renderer = {};
      
    }

    conf.renderer = Creater.createPrimitive( parameters, 'renderer', conf.RENDERING_ENGINE );

    return onthreestarter( conf );

  };

  const withScene = ( { name, config } ) => {

    if ( is.empty( conf.scene ) ) {

      conf.scene = {};

    }

    const scene = THREEScene( conf.RENDERING_ENGINE, config );

    conf.scene[ name ] = scene;

    return onthreestarter( conf );

  };

  const composify = ( { config } ) => {

    const cleanUselessProperty = ( object, properties ) => properties.forEach( property => delete object[ property ] );

    const starter = Creater.composeScene( {
      parameter: conf,
      selectedPrimitives: config
    } );

    const objects3D = merge(
      starter.light,
      starter.mesh
    );

    if ( is.exist( objects3D ) ) {

      Object.keys( objects3D ).forEach( key => starter.scene[ objects3D[ key ].userData.currentScene ].add( objects3D[ key ] ) );
    
    };

    starter.renderer.onrender( {
      renderer: starter.renderer,
      scene: starter.scene.main,
      camera: starter.camera.main
    } );

    cleanUselessProperty( conf, [
      'canvas',
      'RENDERING_ENGINE'
    ] );

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
    composify,
    value,
  };

};
