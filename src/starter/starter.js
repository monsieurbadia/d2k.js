import { is } from 'u3s';
import { Renderer } from '=>/core/core';
import { onbabylonstarter } from './starter.babylon';
import { onthreestarter } from './starter.three';
// import { onglslstarter } from './starter.glsl';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const onlayering = ( TARGET, SOURCE ) => Renderer( TARGET, SOURCE );

/** @public */
const onstarter = ( init = {} ) => {

  const conf = init;

  const use = ( renderingEngine, isShader ) => {
    
    if ( is.empty( renderingEngine ) ) return;

    conf.RENDERING_ENGINE = renderingEngine;
    conf.RENDERING_ENGINE.coreData = {
      canvas: conf.canvas
    };

    if ( conf.RENDERING_ENGINE.BoxBufferGeometry && !isShader ) {
      return onthreestarter( conf );
    } else if ( conf.RENDERING_ENGINE.SceneComponentConstants ) {
      return onbabylonstarter( conf );
    }

    // switch ( true ) {
    //   case conf.RENDERING_ENGINE.BoxBufferGeometry && isShader === true:
    //     return onglslstarter( conf );
    //   case conf.RENDERING_ENGINE.BoxBufferGeometry && isShader === false: 
    //     return onthreestarter( conf );
    //   case conf.RENDERING_ENGINE.SceneComponentConstants:
    //     return onbabylonstarter( conf );
    //   default:
    //     return;
    // }

    return console.log( 'invalid engine' );

  };

  const value = _ => conf;

  return {
    use,
    value
  };

};

/** @public */
export const Starter = _ => {

  return Object.assign( {
    onlayering,
    onstarter
  } );

};
