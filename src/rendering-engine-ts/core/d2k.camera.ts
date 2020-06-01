import { uniqid } from 'u3s/src/u3s';
import { Renderable } from './d2k.renderable';
import { Matrix4 } from '../math/d2k.matrix4';
import { Vector3 } from '../math/d2k.vector3';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Camera extends Renderable implements ICamera {

  fov = 45 * Math.PI / 180;
  aspect = window.innerWidth / window.innerHeight;
  near = 1e-2;
  far = 1e4;
  type = '';
  left = 0;
  right = 0;
  bottom = 0;
  top = 0;
  uuid: void = uniqid();
  isCamera: boolean = true;
  modelViewMatrix = new Matrix4();
  normalMatrix = new Matrix4();
  projectionMatrix = new Matrix4();

  constructor ( {
    fov = 45 * Math.PI / 180,
    aspect = window.innerWidth / window.innerHeight,
    near = 1e-2,
    far = 1e4,
    type = '',
    left = 0,
    right = 0,
    bottom = 0,
    top = 0
  }: {
    fov?: number,
    aspect?: number,
    near?: number,
    far?: number,
    type?: string,
    left?: number,
    right?: number,
    bottom?: number,
    top?: number,
  } = {} ) {

    super();

    Object.assign( this, { fov, aspect, near, far, left, right, bottom, top, type } );

  }

  perspective ( { fov, aspect, near, far }: { fov?: number, aspect?: number, near?: number, far?: number } = {} ): this {

    this.projectionMatrix.toPerspective( { fov, aspect, near, far } );

    return Object.assign( this, { fov, aspect, near, far } );

  }

  orthogonal ( { left, right, bottom, top, near, far }: { left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number } = {} ): this {

    this.projectionMatrix.toOrthogonal( { left, right, bottom, top, near, far } );

    return Object.assign( this, { left, right, bottom, top, near, far } );

  }

}
