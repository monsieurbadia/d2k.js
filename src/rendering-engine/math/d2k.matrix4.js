import * as λ from './λ/d2k.mat4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Matrix4 {

  value = λ.create();

  identity = _ => {
    
    λ.identity( this.value );
    
    return this;

  };

  inverse = a => {

    λ.invert( this.value, a );

    return this;

  };

  lookAt = ( eye, center, up ) => {

    λ.lookAt( this.value, eye, center, up );

    return this;

  };

  rotate = ( m, v, axis ) => {
  
    λ.rotate( this.value, m, v, axis );
    
    return this;
  
  };

  scale = ( m, v ) => {

    λ.scale( this.value, m, typeof v === 'number' ? [ v, v, v ] : v );

    return this;
  };

  set = ( m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 ) => {
    
    λ.set( this.value, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 );

    return this;

  };

  toOrthogonal = ( { left, right, bottom, top, near, far } = {} ) => {

    λ.ortho( this.value, left, right, bottom, top, near, far );

    return this;

  };

  toPerspective = ( { fov, aspect, near, far } = {} ) => {

    λ.perspective( this.value, fov, aspect, near, far );

    return this;

  };

  transpose = a => {

    λ.set( this.value, a );

    return this;

  };

  translate = ( m, v ) => {

    λ.translate( this.value, m, v );

    return this;

  };

}
