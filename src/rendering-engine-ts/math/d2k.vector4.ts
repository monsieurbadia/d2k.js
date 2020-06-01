import * as λ from './λ/d2k.vec4';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Vector4 {

  x: number = 0;
  y: number = 0;
  z: number = 0;
  w: number = 0;

  get value () { return [ this.x, this.y, this.z, this.w ]; }

  set value ( value: number[] | Float32Array ) { 

    this.x = value[ 0 ];
    this.y = value[ 1 ]; 
    this.z = value[ 2 ];
    this.w = value[ 3 ];

  }

  constructor ( x: number = 0, y: number = x, z: number = x, w: number = x ) {

    this.value = λ.fromValues( x, y, z, w );

  }

  set ( x: number = 0, y: number = x, z: number = x, w: number = x ) {

    this.value = λ.set( this.value, x, y, z, w );

    return this;

  }

}
