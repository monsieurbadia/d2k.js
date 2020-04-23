import { is } from 'u3s';
import { FS } from '=>/core/core.events';

import {
  THREEShader,
  THREEScene
} from '=>/engine/three/primitive/primitive';

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
    camera.position.set( ...[ 0, 0, -1 ]  );

    const renderer = new conf.RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas: conf.RENDERING_ENGINE.coreData.canvas } );

    renderer.setClearColor( 0x000000 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( ...config.size, true );
    renderer.timer = new conf.RENDERING_ENGINE.Clock();
    
    Object.assign( renderer, { ...FS } );

    conf.renderer[ name ] = renderer;

    renderer.setAnimationLoop( () => {

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
