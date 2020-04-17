import { pipe } from 'u3s';

import {
  createCamera,
  createMesh,
  createRenderer,
  createScene
} from './primitive/primitive';

/** @public */
const init = option => {

  const operations = [
    createScene,
    createCamera,
    createRenderer,
    createMesh
  ];

  const prepare = pipe( ...operations );
  const starter = prepare( option );

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
