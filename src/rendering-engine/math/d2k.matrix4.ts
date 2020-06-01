import * as λ from './λ/d2k.mat4';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Matrix4 {

  value: number[] | Float32Array = λ.create();

  identity (): this {
    
    λ.identity( this.value );
    
    return this;

  }

  invert ( a: number[] ): this {

    λ.invert( this.value, a );

    return this;

  }

  lookAt ( eye: number[], center: number[], up: number[] ): this {

    λ.lookAt( this.value, eye, center, up );

    return this;

  }

  rotate ( m: number[], rad: number, axis: number[] ): this {
  
    λ.rotate( this.value, m, rad, axis );
    
    return this;
  
  }

  rotateX ( m: number[], angle: number ): this {

    λ.rotateX( this.value, m, angle );

    return this;
  
  }

  rotateY ( m: number[], angle: number ): this {

    λ.rotateY( this.value, m, angle );

    return this;
  
  }

  scale ( m: number[], v: number[] ): this {

    λ.scale( this.value, m, typeof v === 'number' ? [ v, v, v ] : v );

    return this;

  }

  set (
    m00: number, m01: number, m02: number, m03: number,
    m10: number, m11: number, m12: number, m13: number,
    m20: number, m21: number, m22: number, m23: number,
    m30: number, m31: number, m32: number, m33: number
  ): this {
    
    λ.set( this.value, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 );

    return this;

  }

  toOrthogonal ( {
    left = 0,
    right = 0,
    bottom = 0,
    top = 0,
    near = 0,
    far = 0
  }:{
    left?: number,
    right?: number,
    bottom?: number,
    top?: number,
    near?: number,
    far?: number
  } = {} ): this {

    λ.ortho( this.value, left, right, bottom, top, near, far );

    return this;

  }

  toPerspective ( {
    fov = 0,
    aspect = 0,
    near = 0,
    far = 0
  }:{
    fov?: number,
    aspect?: number,
    near?: number,
    far?: number
  } = {} ): this {

    λ.perspective( this.value, fov, aspect, near, far );

    return this;

  }

  transpose ( a: number[] ): this {

    λ.transpose( this.value, a );

    return this;

  }

  translate ( m: number[], v: number[] ): this {

    λ.translate( this.value, m, v );

    return this;

  }

}
