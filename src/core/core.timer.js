/**
 * @see https://raw.githubusercontent.com/mrdoob/three.js/dev/src/core/Clock.js
 */

let autoStart = ( autoStart !== undefined ) ? autoStart : true;
let startTime = 0;
let oldTime = 0;
let elapsedTime = 0;
let running = false;

const start = _ => {

  startTime = ( typeof performance === 'undefined' ? Date : performance ).now();
  oldTime = startTime;
  elapsedTime = 0;
  running = true;

};

const stop = _ => {

  getElapsedTime();

  running = false;
  autoStart = false;

};

const getElapsedTime = _ => {

  getDelta();

  return elapsedTime;

};

const getDelta = _ => {

  let diff = 0;

  if ( autoStart && ! running ) {

    start();

    return 0;

  }

  if ( running ) {

    let newTime = ( typeof performance === 'undefined' ? Date : performance ).now();

    diff = ( newTime - oldTime ) / 1000;
    oldTime = newTime;

    elapsedTime += diff;

  }

  return diff;

}

export const Timer = Object.freeze( {

  start,
  stop,
  getElapsedTime,
  getDelta

} );
