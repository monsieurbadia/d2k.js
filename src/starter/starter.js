import { is } from 'u3s';
import { Renderer } from '=>/core/core';
import { onbabylonstarter } from './starter.babylon';
import { onglslstarter } from './starter.glsl';
import { onthreestarter } from './starter.three';

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

    if ( conf.RENDERING_ENGINE.SceneComponentConstants ) {
      return onbabylonstarter( conf );
    } else if ( conf.RENDERING_ENGINE.BoxBufferGeometry && isShader ) {
      return onglslstarter( conf );
    } else if ( conf.RENDERING_ENGINE.BoxBufferGeometry && !isShader ) {
      return onthreestarter( conf );
    }

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
