import * as λ from './λ/d2k.vec2';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Vector2 {

  x = 0;
  y = 0;

  get value () { return [ this.x, this.y ]; }
  
  set value ( value ) { 

    this.x = value[ 0 ];
    this.y = value[ 1 ]; 

    return this;

  }

  constructor ( x = 0, y = x ) {

    this.value = λ.fromValues( x, y );

  }

  set ( x = 0, y = x ) {

    this.value = λ.set( this.value, x, y );

    return this;

  }

}
