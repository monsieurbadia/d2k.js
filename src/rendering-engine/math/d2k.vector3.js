import { pipe } from 'u3s';
import * as λ from './λ/d2k.vec3';

const createConstructor = config => instance => {

  instance.x = config.x;
  instance.y = config.y;
  instance.z = config.z;

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

export const Vector3 = function Vector3 ( x = 0, y = 0, z = 0 ) {

  return pipe(
    createConstructor( { x, y, z } ),
    createPrototype,
    makeInitializing
  )( this );

};
