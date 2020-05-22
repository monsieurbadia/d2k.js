import { is, strings, oftype } from 'u3s';
import { CONFIG, OBJECTS3D } from '=>/3d-object-builder/base';
import { CachingSystem, Modifier } from '=>/3d-object-builder/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const THREECamera = ( {
  RENDERING_ENGINE,
  config = CONFIG.THREE.CAMERA
} = {} ) => {

  const instanceName = strings.makeFirstLetterUpperCase( `${ config.type }-camera` );
  
  const parsedArgs = config.args.map( arg => arg === null || arg === undefined ? ( arg = window.innerWidth / window.innerHeight ) : arg );

  const camera = is.include( OBJECTS3D.CACHE.camera, instanceName )
    ? CachingSystem.get( { key: instanceName, type: 'camera' } )
    : CachingSystem.makeCache( {
        key: instanceName,
        type: 'camera',
        data: new RENDERING_ENGINE[ instanceName ]( ...parsedArgs )
      } );

  RENDERING_ENGINE.coreData.camera = camera;

  Modifier.setDynamicProperty( {
    object3d: camera,
    rendering: 'three',
    parameter: config
  } );

  return camera;

};


