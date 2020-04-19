import { pipe } from 'u3s';
import { DOM, Creater } from '=>/core/core';
import { BABYLONEngine } from './engine/babylon/primitive/primitive.babylon.engine';

/** @public */
const onready = parameters => {

  parameters.ENGINE.coreData = {};

  const operations = [
    payload => ( { ...payload, dom: DOM() } ),
    payload => Creater( 'loader', payload ),
    payload => {
      parameters.ENGINE.coreData.engine = BABYLONEngine( parameters.ENGINE );
      return payload;
    },
    payload => Creater( 'scene', payload ),
    payload => Creater( 'camera', payload ),
    payload => Creater( 'renderer', payload ),
    payload => Creater( 'mesh', payload ),
    payload => Creater( 'light', payload )
  ];

  const prepare = pipe( ...operations );
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
