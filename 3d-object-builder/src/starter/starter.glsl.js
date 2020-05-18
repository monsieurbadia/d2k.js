import { is } from 'u3s';
import { CONFIG } from '=>/base';

import {
  THREECamera,
  THREEGLSL,
  THREERenderer,
  THREEScene
} from '=>/objects3d/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const onglslstarter = ( init = {} ) => {

  const conf = init;

  const withShader = ( { name, config } ) => {

    if ( is.empty( conf.shader ) ) {

      conf.shader = {};
      conf.renderer = {};

    }

    const { RENDERING_ENGINE } = conf;
    const shader = THREEGLSL( { RENDERING_ENGINE, config } );
    const renderer = THREERenderer( { RENDERING_ENGINE, config: CONFIG.THREE.RENDERER.config } );
    const scene = THREEScene( { RENDERING_ENGINE } );
    const camera = THREECamera( { RENDERING_ENGINE, config: CONFIG.THREE.CAMERA.config } );

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
