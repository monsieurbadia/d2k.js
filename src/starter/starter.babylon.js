import { is } from 'u3s';
import { Creater } from '=>/core';

import {
  BABYLONEngine,
  BABYLONLight,
  BABYLONMesh,
  BABYLONScene
} from '=>/engine/babylon';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const onbabylonstarter = ( init = {} ) => {

  const conf = init;

  const withEngine = ( { name, config } ) => {

    if ( is.empty( conf.engine ) ) {

      conf.engine = {};

    };

    conf.engine[ name ] = BABYLONEngine( conf.RENDERING_ENGINE );

    return onbabylonstarter( conf );

  };

  const withCamera = ( ...payload ) => {

    if ( is.empty( conf.camera ) ) {

      conf.camera = {};

    }

    const cams = payload.reduce( ( result, value ) => ( { ...result, [ value.name ]: Creater( conf.RENDERING_ENGINE, 'camera', value ) } ), {} );

    conf.camera = cams;

    return onbabylonstarter( conf );

  };

  const withLight = ( { name, config } ) => {

    if ( is.empty( conf.light ) ) {

      conf.light = {};

    }

    conf.light[ name ] = BABYLONLight( conf.RENDERING_ENGINE, config );

    return onbabylonstarter( conf );

  };

  const withMesh = ( { name, config } ) => {

    if ( is.empty( conf.mesh ) ) {

      conf.mesh = {};

    }

    conf.mesh[ name ] = BABYLONMesh( conf.RENDERING_ENGINE, config );

    return onbabylonstarter( conf );

  };

  const withScene = ( { name, config } ) => {

    if ( is.empty( conf.scene ) ) {

      conf.scene = {};

    }

    conf.scene[ name ] = BABYLONScene( conf.RENDERING_ENGINE );

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
