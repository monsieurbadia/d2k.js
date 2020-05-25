import * as λ from './λ/d2k.vec4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Vector4 {

  x = 0;
  y = 0;
  z = 0;
  w = 0;

  get value () { return [ this.x, this.y, this.z, this.w ]; }
  
  set value ( value ) { 

    this.x = value[ 0 ];
    this.y = value[ 1 ]; 
    this.z = value[ 2 ];
    this.w = value[ 3 ];

    return this;

  }

  constructor ( x = 0, y = x, z = x, w = x ) {

    this.value = λ.fromValues( x, y, z, w );

  }

  set ( x = 0, y = x, z = x, w = x ) {

    this.value = λ.set( this.value, x, y, z, w );

    return this;

  }

}
