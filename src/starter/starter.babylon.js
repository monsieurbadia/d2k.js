import { Creater } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const onbabylonstarter = ( init = {} ) => {

  const conf = init;
  const value = _ => conf;

  return {
    value,
    withCamera: Creater.oncreate( { conf, name: 'camera', starter: onbabylonstarter } ),
    withEngine: Creater.oncreate( { conf, name: 'engine', starter: onbabylonstarter } ),
    withLight: Creater.oncreate( { conf, name: 'light', starter: onbabylonstarter } ),
    withMesh: Creater.oncreate( { conf, name: 'mesh', starter: onbabylonstarter } ),
    withScene: Creater.oncreate( { conf, name: 'scene', starter: onbabylonstarter } )
  };

};
