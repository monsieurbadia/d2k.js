import { is } from 'u3s';
import { Renderer } from '=>/core/core';
import { onbabylonstarter } from './starter.babylon';
import { onthreestarter } from './starter.three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const onlayering = ( TARGET, SOURCE ) => Renderer( TARGET, SOURCE );

/** @public */
const onstarter = ( init = {} ) => {

  const conf = init;

  const use = renderingEngine => {
    
    if ( is.empty( renderingEngine ) ) return;

    conf.RENDERING_ENGINE = renderingEngine;
    conf.RENDERING_ENGINE.coreData = {
      canvas: conf.canvas
    };

    if ( conf.RENDERING_ENGINE.BoxBufferGeometry ) {
      return onthreestarter( conf );
    } else if ( conf.RENDERING_ENGINE.SceneComponentConstants ) {
      return onbabylonstarter( conf );
    }
    
    switch ( true ) {
      case conf.RENDERING_ENGINE.BoxBufferGeometry: 
      return onthreestarter( conf );
      case conf.RENDERING_ENGINE.SceneComponentConstants:
        return onbabylonstarter( conf );
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
