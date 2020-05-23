import * as λ from './λ/d2k.mat4';
import { pipe } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = _ => instance => {

  instance.value = λ.create();

  return instance;

};

const createPrototype = ( instance ) => {

  instance.identity = _ => {
    
    λ.identity( instance.value );
    
    return instance;

  };

  instance.inverse = a => {

    λ.invert( instance.value, a );

    return instance;

  };

  instance.lookAt = ( eye, center, up ) => {

    λ.lookAt( instance.value, eye, center, up );

    return instance;

  };

  instance.rotate = ( m = instance.value, v, axis ) => {
  
    λ.rotate( instance.value, m, v, axis );
    
    return instance;
  
  };

  instance.scale = ( m = instance.value, v ) => {

    λ.scale( instance.value, m, typeof v === 'number' ? [ v, v, v ] : v );

    return instance;
  };

  instance.set = ( m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 ) => {
    
    λ.set( instance.value, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 );

    return instance;

  };

  instance.toOrthogonal = ( { left, right, bottom, top, near, far } = {} ) => {

    λ.ortho( instance.value, left, right, bottom, top, near, far );

    return instance;

  };

  instance.toPerspective = ( { fov, aspect, near, far } = {} ) => {

    λ.perspective( instance.value, fov, aspect, near, far );

    return instance;

  };

  instance.transpose = a => {

    λ.set( instance.value, a );

    return instance;

  };

  instance.translate = ( m = instance.value, v ) => {

    λ.translate( instance.value, m, v );

    return instance;

  };

  return instance;

};

const makeInitializing = instance => {

  return instance;

};

export const Matrix4 = function Matrix4 () {

  return pipe(
    createConstructor(),
    createPrototype,
    makeInitializing
  )( this );

};
