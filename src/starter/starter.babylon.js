import { is } from 'u3s';
import { Creater } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const onbabylonstarter = ( init = {} ) => {

  const conf = init;

  const withEngine = ( ...parameters ) => {

    if ( is.empty( conf.engine ) ) {

      conf.engine = {};

    };

    conf.engine = Creater.createPrimitive( parameters, 'engine', conf.RENDERING_ENGINE );

    return onbabylonstarter( conf );

  };

  const withCamera = ( ...parameters ) => {

    if ( is.empty( conf.camera ) ) {

      conf.camera = {};

    }

    conf.camera = Creater.createPrimitive( parameters, 'camera', conf.RENDERING_ENGINE );

    return onbabylonstarter( conf );

  };

  const withLight = ( ...parameters ) => {

    if ( is.empty( conf.light ) ) {

      conf.light = {};

    }

    conf.light = Creater.createPrimitive( parameters, 'light', conf.RENDERING_ENGINE );

    return onbabylonstarter( conf );

  };

  const withMesh = ( ...parameters ) => {

    if ( is.empty( conf.mesh ) ) {

      conf.mesh = {};

    }

    conf.mesh = Creater.createPrimitive( parameters, 'mesh', conf.RENDERING_ENGINE );

    return onbabylonstarter( conf );

  };

  const withScene = ( ...parameters ) => {

    if ( is.empty( conf.scene ) ) {

      conf.scene = {};

    }

    conf.scene = Creater.createPrimitive( parameters, 'scene', conf.RENDERING_ENGINE );

    return onbabylonstarter( conf );

  };

  const value = _ => conf;

  return {
    value,
    withCamera,
    withEngine,
    withLight,
    withMesh,
    withScene
  };

};
