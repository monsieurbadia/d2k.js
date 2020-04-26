import { is } from 'u3s';
import { CONFIG } from '=>/base';
import { Dom } from '=>/core';

import {
  THREECamera,
  THREERenderer,
  THREEScene,
  THREEShader,
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const onglslstarter = ( init = {} ) => {

  const conf = init;

  const withUniform = ( { name, config } ) => {

    if ( is.empty( conf.shader ) ) {

      conf.shader = {};

    }

    conf.shader[ name ] = THREEShader( conf.RENDERING_ENGINE, config );

    return onglslstarter( conf );

  };

  const withRenderer = ( { name, config } ) => {

    if ( is.empty( conf.renderer ) ) {

      conf.renderer = {};

    }

    const renderer = THREERenderer( conf.RENDERING_ENGINE, config );
    const scene = THREEScene( conf.RENDERING_ENGINE );
    const camera = THREECamera( conf.RENDERING_ENGINE, CONFIG.camera.config );

    conf.renderer[ name ] = renderer;

    scene.add( conf.shader.myShaderName );
    camera.position.set( 0, 0, -1 );

    renderer.onrender( {
      renderer,
      scene,
      camera,
    } );

    Dom.add( Dom.body, renderer.domElement );

    return onglslstarter( conf );

  };

  const withShader = ( { name, config } ) => {

    if ( is.empty( conf.shader ) ) {

      conf.shader = {};

    }

    conf.shader[ name ] = THREEShader( conf.RENDERING_ENGINE, config );

    return onglslstarter( conf );

  };

  const value = _ => conf;

  return {
    value,
    withRenderer,
    withShader,
    withUniform
  };

};
