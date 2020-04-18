import { pipe } from 'u3s';
import { DOM, Creater } from '=>/core/core';

/** @public */
const init = parameters => {

  const operations = [
    payload => ( { ...payload, dom: DOM() } ),
    payload => Creater( 'loader', payload ),
    payload => Creater( 'scene', payload ),
    payload => Creater( 'camera', payload ),
    payload => Creater( 'renderer', payload ),
    payload => Creater( 'mesh', payload ),
    payload => Creater( 'light', payload )
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
