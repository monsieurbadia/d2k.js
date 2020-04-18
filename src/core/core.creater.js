import { reducer } from 'u3s';

import {
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} from '=>/engine/three/primitive/primitive';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const PRIMITIVES = {
  BABYLON: {
    // camera: BABYLONCamera
    // light: BABYLONLight,
    // loader: BABYLONLoader,
    // mesh: BABYLONMesh,
    // renderer: BABYLONRenderer,
    // scene: BABYLONScene,
  },
  THREE: {
    camera: THREECamera,
    light: THREELight,
    loader: THREELoader,
    mesh: THREEMesh,
    renderer: THREERenderer,
    scene: THREEScene,
  },
};

/** @public */
export const Creater = ( key, payload ) => {
  
  let Instance;

  if ( payload.ENGINE.BoxBufferGeometry ) {

    Instance = PRIMITIVES.THREE[ key ];

  } else {

    Instance = PRIMITIVES.BABYLON[ key ];

  }

  return {
    ...payload,
    [ key ]: reducer( payload[ key ], result => Instance( payload.ENGINE, result ) )
  };

};
