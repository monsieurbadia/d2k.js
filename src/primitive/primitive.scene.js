import { reducer } from 'u3s';

/** @private */
const Scene = _ => new THREE.Scene();

/** @public */
export const createScene = payload => ( {
  ...payload,
  scene: reducer( payload.scene, _ => Scene() )
} );
