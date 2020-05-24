import * as λ from './λ/d2k.vec3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Vector3 {

  x = null;
  y = null;
  z = null;

  value = λ.create();

  set = ( x, y, z ) => {

    λ.set( this.value, x, y, z );

    return this;

  }

}
