import { is } from 'u3s';

import {
  Dom,
  Event,
  Version
} from '=>/core';

import {
  onbabylonstarter,
  onglslstarter,
  onthreestarter
} from '=>/starter';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

let version;

export const onrender = ( TARGET, SOURCE ) => TARGET.renderer.assign( TARGET, SOURCE );

export const onstarter = ( init = {} ) => {

  const conf = init;
  const canvas = conf?.canvas && conf.canvas instanceof HTMLCanvasElement ? conf.canvas : document.getElementById( conf.canvas );

  const use = renderingEngine => {

    if ( is.empty( renderingEngine ) ) return onstarter( conf );

    conf.event = Event;
    conf.RENDERING_ENGINE = renderingEngine;
    conf.RENDERING_ENGINE.coreData = {
      canvas
    };

    if ( canvas ) {
      
      Dom.setCanvasSize( canvas );

    }

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

  return Object.freeze( {
    use,
    value
  } );

};
