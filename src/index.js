import { pipe } from 'u3s';

import {
  createDOM
} from '=>/creater/creater';

import {
  createCamera,
  createLight,
  createLoader,
  createMesh,
  createRenderer,
  createScene
} from '=>/engine/three/primitive/primitive';

/** @public */
const init = parameters => {

  const operations = [
    createDOM,
    createLoader,
    createScene,
    createCamera,
    createRenderer,
    createMesh,
    createLight
  ];

  const prepare = pipe( ...operations );
  const starter = prepare( parameters );

  delete starter.THREE;

  return { ...starter };

};

/** 
 * d2k
 * 
 * @public
 */

export const d2k = Object.freeze( {
  init
} );

module.exports = d2k;
