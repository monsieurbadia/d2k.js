import * as λ from './λ/d2k.vec3';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Vector3 {

  x: number = 0;
  y: number = 0;
  z: number = 0;

  get value () { return [ this.x, this.y, this.z ]; }
  
  set value ( value: vec3 ) { 

    this.x = value[ 0 ];
    this.y = value[ 1 ]; 
    this.z = value[ 2 ];

  }

  constructor ( x: number = 0, y: number = x, z: number = x ) {

    this.value = λ.fromValues( x, y, z );

  }

  set ( x: number = 0, y: number = x, z: number = x ): this {

    this.value = λ.set( this.value, x, y, z );

    return this;

  }

}
