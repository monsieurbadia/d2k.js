import * as λ from './λ/d2k.vec2';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Vector2 {

  x: number = 0;
  y: number = 0;

  get value () { return [ this.x, this.y ]; }
  
  set value ( value: number[] | Float32Array ) { 

    this.x = value[ 0 ];
    this.y = value[ 1 ];

  }

  constructor ( x: number = 0, y: number = x ) {

    this.value = λ.fromValues( x, y );

  }

  set ( x: number = 0, y: number = x ) {

    this.value = λ.set( this.value, x, y );

    return this;

  }

}
