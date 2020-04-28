import { is } from 'u3s';
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

    const starter = Creater.composeScene( { parameter: conf, selectedPrimitives: config } );
    const scene = THREEScene( conf.RENDERING_ENGINE, config );

    conf.scene[ name ] = scene;

    if ( is.exist( starter.mesh ) ) Object.keys( starter.mesh ).forEach( key => scene.add( starter.mesh[ key ] ) );
    if ( is.exist( starter.light ) ) Object.keys( starter.light ).forEach( key => scene.add( starter.light[ key ] ) );

    starter.renderer.onrender( { renderer: starter.renderer, scene, camera: starter.camera.main } );

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
