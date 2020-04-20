import { pipe } from 'u3s';
import { Creater, DOM, Renderer } from '=>/core/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const D2KCOREDATA = {};

/** @public */
const onready = parameters => {

  parameters.ENGINE.d2kCoreData = D2KCOREDATA;

  const OPERATIONS = [
    payload => ( { ...payload, dom: DOM( payload.ENGINE ) } ),
    payload => Creater( 'loader', payload ),
    payload => Creater( 'engine', payload ),
    payload => Creater( 'scene', payload ),
    payload => Creater( 'camera', payload ),
    payload => Creater( 'renderer', payload ),
    payload => Creater( 'mesh', payload ),
    payload => Creater( 'light', payload )
  ];

  const prepare = pipe( ...OPERATIONS );
  const starter = prepare( parameters );

  Object
    .keys( starter )
    .filter( key => starter[ key ] === undefined )
    .forEach( key => delete starter[ key ] );

  delete starter.THREE;

  return { ...starter };

};

/** @public */
const onstack = ( BABYLON, THREE, f ) => {

  const renderer = Renderer( [ BABYLON, THREE ] );

  renderer.onrender( () => {} );

};

/** 
 * d2k
 * 
 * @public
 */

export const d2k = Object.freeze( {
  onready,
  onstack
} );

module.exports = d2k;
