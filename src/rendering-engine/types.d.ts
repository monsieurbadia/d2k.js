/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


declare module '*.glsl' {
  const value: string
  export default value
}


interface IMatrix4 {

  value: number[] | Float32Array;

  identity: () => this;
  invert: ( a: number[] ) => this;
  lookAt: ( eye: number[], center: number[], up: number[] ) => this;
  rotate: ( m: number[], rad: number, axis: number[] ) => this;
  rotateX: ( m: number[], angle: number ) => this;
  rotateY: ( m: number[], angle: number ) => this;
  scale: ( m: number[], v: number[] ) => this;
  transpose: ( a: number[] ) => this;
  translate: ( m: number[], v: number[] ) => this;

  set: (
    m00: number, m01: number, m02: number, m03: number,
    m10: number, m11: number, m12: number, m13: number,
    m20: number, m21: number, m22: number, m23: number,
    m30: number, m31: number, m32: number, m33: number
  ) => this;

  toOrthogonal: ( {
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
  } = {} ) => this;

  toPerspective: ( {
    fov = 0,
    aspect = 0,
    near = 0,
    far = 0
  }:{
    fov?: number,
    aspect?: number,
    near?: number,
    far?: number
  } = {} ) => this;

}


interface IVector3 {

  x: number;
  y: number;
  z: number;
  value: vec2;
  
  set: ( x: number = 0, y: number = x, z: number = x ) => this;

}


interface ICamera {

  uuid: void;
  isCamera: boolean;
  modelViewMatrix: Matrix4;
  normalMatrix: Matrix4;
  projectionMatrix: Matrix4;
  fov: number;
  aspect: number;
  left: number;
  right: number;
  bottom: number;
  top: number;
  near: number;
  far: number;
  type: string;
  position: IVector3;
  rotation: IVector3;
  perspective: ( object ) => this;
  orthogonal: ( object ) => this;

}


interface Iprogram {

  modelViewMatrix: WebGLUniformLocation;
  normalMatrix: WebGLUniformLocation;
  projectionMatrix: WebGLUniformLocation;
  object3dMatrix: WebGLUniformLocation;
  position: number;
  normal: number;
  color: number;

}


interface IRenderable {

  matrix: IMatrix4;
  worldMatrix: IMatrix4;
  position: IVector3;
  rotation: IVector3;
  scale: IMatrix4;

}