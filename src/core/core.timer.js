import { is } from 'u3s';

/**
 * @see https://raw.githubusercontent.com/mrdoob/three.js/dev/src/core/Clock.js
 */

let startTime = 0;
let time = 0;

export const Timer = Object.freeze( {

  getDelta: _ => {

    let diff = 0;
    let currentTime = ( is.exist( window.performance ) ? Date : window.performance ).now();

    diff = ( currentTime - startTime ) / 1000;
    startTime = currentTime;

    time += diff;

    return diff;

  }

} );
