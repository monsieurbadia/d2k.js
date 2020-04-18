import { reducer } from 'u3s';

/** @private */
const Scene = ENGINE => new ENGINE.Scene();

/** @public */
export const createScene = payload => ( {
  ...payload,
  scene: reducer( payload.scene, _ => Scene( payload.ENGINE ) )
} );
