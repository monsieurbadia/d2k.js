import { is } from 'u3s';

import {
  THREEShader
} from '=>/engine/three/primitive/primitive';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const onglslstarter = ( init = {} ) => {

  const conf = init;

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
    withShader
  };

};
