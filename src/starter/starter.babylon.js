import { Creater, Deletion } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const onbabylonstarter = ( init = {} ) => {

  const conf = init;

  const composify = ( { config } ) => {

    const starter = Creater.composeScene( {
      parameter: conf,
      selectedPrimitives: config
    } );

    if ( config.start ) {

      starter.engine.onrender( {
        engine: starter.engine,
        scene: starter.scene.main
      } );

    }

    Deletion.cleanUselessProperty( conf, [
      'canvas',
      'RENDERING_ENGINE'
    ] );

    return onbabylonstarter( conf );

  };

  const value = _ => conf;

  return Object.freeze( {
    composify,
    value,
    withCamera: Creater.oncreate( { conf, name: 'camera', starter: onbabylonstarter } ),
    withEngine: Creater.oncreate( { conf, name: 'engine', starter: onbabylonstarter } ),
    withLight: Creater.oncreate( { conf, name: 'light', starter: onbabylonstarter } ),
    withMesh: Creater.oncreate( { conf, name: 'mesh', starter: onbabylonstarter } ),
    withScene: Creater.oncreate( { conf, name: 'scene', starter: onbabylonstarter } )
  } );

};
