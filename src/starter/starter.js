import { is } from 'u3s';
import { Renderer, Version } from '=>/core/core';
import { onbabylonstarter } from './starter.babylon';
import { onglslstarter } from './starter.glsl';
import { onthreestarter } from './starter.three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const onstarter = ( init = {} ) => {

  const conf = init;

  const use = ( renderingEngine, Is ) => {

    if ( is.empty( renderingEngine ) ) return;

    conf.RENDERING_ENGINE = renderingEngine;
    conf.RENDERING_ENGINE.coreData = {
      canvas: conf.canvas
    };

    if ( conf.RENDERING_ENGINE.SceneComponentConstants ) {
      return onbabylonstarter( conf );
    } else if ( conf.RENDERING_ENGINE.BoxBufferGeometry && Is === 'glsl' ) {
      return onglslstarter( conf );
    } else if ( conf.RENDERING_ENGINE.BoxBufferGeometry && !Is ) {
      return onthreestarter( conf );
    }

    return console.log( 'invalid rendering engine' );

  };

  const value = _ => conf;

  Version();

  return {
    use,
    value
  };

};

/** @public */
export const Starter = _ => {

  const onlayering = ( TARGET, SOURCE ) => Renderer( TARGET, SOURCE );

  return Object.assign( {
    onlayering,
    onstarter
  } );

};
