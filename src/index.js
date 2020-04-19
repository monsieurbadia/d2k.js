import { pipe } from 'u3s';
import { DOM, Creater } from '=>/core/core';

const OPERATIONS = [
  payload => ( { ...payload, dom: DOM() } ),
  payload => Creater( 'loader', payload ),
  payload => Creater( 'engine', payload ),
  payload => Creater( 'scene', payload ),
  payload => Creater( 'camera', payload ),
  payload => Creater( 'renderer', payload ),
  payload => Creater( 'mesh', payload ),
  payload => Creater( 'light', payload )
];

/** @public */
const onready = parameters => {

  parameters.ENGINE.coreData = {};

  const prepare = pipe( ...OPERATIONS );
  const starter = prepare( parameters );

  Object
    .keys( starter )
    .filter( key => starter[ key ] === undefined )
    .forEach( key => delete starter[ key ] );

  delete starter.THREE;

  return { ...starter };

};

/** 
 * d2k
 * 
 * @public
 */

export const d2k = Object.freeze( {
  onready
} );

module.exports = d2k;
