import { is, merge } from 'u3s';
import { Creater, Deletion } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const onthreestarter = ( init = {} ) => {

  const conf = init;

  const composify = ( { config } = {} ) => {

    const addObjectsToScene = objects3d => Object.keys( objects3d ).forEach( key => starter.scene[ objects3d[ key ].userData.currentScene ].add( objects3d[ key ] ) );

    const starter = Creater.composeScene( {
      parameter: conf,
      selectedPrimitives: config
    } );

    const objects3d = merge(
      starter.light,
      starter.mesh
    );

    if ( is.exist( objects3d ) ) {

      addObjectsToScene( objects3d );
    
    };

    if ( config.start ) {

      starter.renderer.onrender( {
        renderer: starter.renderer,
        scene: starter.scene.main,
        camera: starter.camera.main
      } );

    }

    Deletion.cleanUselessProperty( conf, [
      'canvas',
      'RENDERING_ENGINE'
    ] );

    return onthreestarter( conf );

  };

  const value = _ => conf;

  return Object.freeze( {
    composify,
    value,
    withCamera: Creater.oncreate( { conf, name: 'camera', starter: onthreestarter } ),
    withLight: Creater.oncreate( { conf, name: 'light', starter: onthreestarter } ),
    withLoader: Creater.oncreate( { conf, name: 'loader', starter: onthreestarter } ),
    withMesh: Creater.oncreate( { conf, name: 'mesh', starter: onthreestarter } ),
    withRenderer: Creater.oncreate( { conf, name: 'renderer', starter: onthreestarter } ),
    withScene: Creater.oncreate( { conf, name: 'scene', starter: onthreestarter } ),
  } );

};
