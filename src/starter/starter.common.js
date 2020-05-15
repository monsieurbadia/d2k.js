import { is } from 'u3s';

import {
  Dom,
  Event,
  Semverlog
} from '=>/core';

import {
  onbabylonstarter,
  onglslstarter,
  onthreestarter
} from '=>/starter';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

let semver;

export const onrender = ( TARGET, SOURCE ) => TARGET.renderer.assign( TARGET, SOURCE );

export const onstarter = ( init = {} ) => {

  const conf = init;
  const canvas = conf.canvas && conf.canvas instanceof HTMLCanvasElement ? conf.canvas : document.getElementById( conf.canvas );

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
    } else {
      return console.log( 'invalid rendering engine' );
    }

  };

  const value = _ => conf;

  if ( semver === undefined ) semver = Semverlog();

  return Object.freeze( {
    use,
    value
  } );

};
