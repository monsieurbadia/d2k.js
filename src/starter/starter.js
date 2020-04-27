import { is } from 'u3s';
import { Dom, Renderer, Version } from '=>/core';
import { onbabylonstarter } from './starter.babylon';
import { onglslstarter } from './starter.glsl';
import { onthreestarter } from './starter.three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

let version;

const onlayering = ( TARGET, SOURCE ) => Renderer( TARGET, SOURCE );

const onstarter = ( init = {} ) => {

  const conf = init;

  const use = ( renderingEngine, isShader = false ) => {

    if ( is.empty( renderingEngine ) ) return onstarter( conf );

    Dom.setCanvasSize( conf.canvas );

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

    return console.log( 'invalid rendering engine' );

  };

  const value = _ => conf;

  if ( version === undefined ) version = Version();

  return {
    use,
    value
  };

};

/** @public */
export const Starter = _ => Object
  .assign( {
    onlayering,
    onstarter
  } );
