import { is } from 'u3s';
import { Dom, Renderer, Version } from '=>/core';

import {
  onbabylonstarter,
  onglslstarter,
  onthreestarter
} from '=>/starter';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

let version;

export const onlayering = ( ...[ TARGET = {}, SOURCE = {} ] ) => Renderer.assign( TARGET, SOURCE );

export const onstarter = ( init = {} ) => {

  const conf = init;

  const use = ( renderingEngine ) => {

    if ( is.empty( renderingEngine ) ) return onstarter( conf );

    Dom.setCanvasSize( conf.canvas );

    conf.RENDERING_ENGINE = renderingEngine;
    conf.RENDERING_ENGINE.coreData = {
      canvas: conf.canvas
    };

    if ( conf.RENDERING_ENGINE.SceneComponentConstants ) {
      return onbabylonstarter( conf );
    } else if ( conf.RENDERING_ENGINE.BoxBufferGeometry && conf.glsl ) {
      return onglslstarter( conf );
    } else if ( conf.RENDERING_ENGINE.BoxBufferGeometry && !conf.glsl ) {
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