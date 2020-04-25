import { is } from 'u3s';
import { CALLBACKS } from '=>/base';
import { Dom } from '=>/core';

import {
  THREEShader,
  THREEScene
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

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

    const scene = new conf.RENDERING_ENGINE.Scene( THREEScene );
    const camera = new conf.RENDERING_ENGINE.Camera();
    const renderer = new conf.RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas: conf.RENDERING_ENGINE.coreData.canvas } );

    camera.position.set( 0, 0, -1 );
    renderer.setClearColor( 0x000000 );
    renderer.setPixelRatio( Dom.pixelRatio );
    renderer.setSize( ...config.size, true );
    renderer.timer = new conf.RENDERING_ENGINE.Clock();

    Object.assign( renderer, { ...CALLBACKS } );

    conf.renderer[ name ] = renderer;

    renderer.setAnimationLoop( _ => {

      renderer.renders.forEach( render => render( renderer.timer.getDelta() ) );
      renderer.render( scene, camera );

    } );

    scene.add( conf.shader.myShaderName );
    document.body.appendChild( renderer.domElement );

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
