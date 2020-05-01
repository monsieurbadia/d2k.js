import { is } from 'u3s';
import { __, CONFIG } from '=>/base';

import {
  THREECamera,
  THREERenderer,
  THREEScene,
  THREEShader,
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const onglslstarter = ( init = __.OBJECT ) => {

  const conf = init;

  const withShader = ( { name, config } ) => {

    if ( is.empty( conf.shader ) ) {

      conf.shader = Object.create( null );
      conf.renderer = Object.create( null );

    }

    const shader = THREEShader( conf.RENDERING_ENGINE, config );
    const renderer = THREERenderer( conf.RENDERING_ENGINE, CONFIG.RENDERER.config );
    const scene = THREEScene( conf.RENDERING_ENGINE );
    const camera = THREECamera( conf.RENDERING_ENGINE, CONFIG.CAMERA.config );

    conf.shader[ name ] = shader;
    conf.renderer.current = renderer;

    scene.add( conf.shader.myShaderName );

    renderer.onrender( {
      renderer,
      scene,
      camera
    } );

    return onglslstarter( conf );

  };

  const value = _ => conf;

  return Object.freeze( {
    value,
    withShader
  } );

};
