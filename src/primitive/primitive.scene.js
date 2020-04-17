import { reducer } from 'u3s';

/** @private */
const Scene = THREE => new THREE.Scene();

/** @public */
export const createScene = payload => ( {
  ...payload,
  scene: reducer( payload.scene, _ => Scene( payload.THREE ) )
} );
