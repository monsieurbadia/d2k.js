import { pipe } from 'u3s';
import * as λ from './λ/d2k.vec3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = ( {
  x = 0,
  y = 0,
  z = 0
} ) => instance => {

  instance.x = x;
  instance.y = y;
  instance.z = z;

  return instance;

};

const createPrototype = instance => {

  instance.set = ( x, y, z ) => {

    λ.set( instance.value, x, y, z );

    return instance;

  };

  return instance;

};

const makeInitializing = instance => instance;

export const Vector3 = function Vector3 ( config ) {

  return pipe(
    createConstructor( config ),
    createPrototype,
    makeInitializing
  )( this );

};
