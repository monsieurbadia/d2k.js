import * as λ from './λ/d2k.vec3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Vector3 {

  x = 0;
  y = 0;
  z = 0;

  get value () { return [ this.x, this.y, this.z ]; }
  
  set value ( value ) { 

    this.x = value[ 0 ]
    this.y = value[ 1 ] 
    this.z = value[ 2 ]

    return this;

  }

  constructor ( x = 0, y = x, z = x ) {

    this.value = λ.fromValues( x, y, z );

  }

  set ( x = 0, y = x, z = x ) {

    this.value = λ.set( this.value, x, y, z );

    return this;

  }

}

console.log( new Vector3() );
