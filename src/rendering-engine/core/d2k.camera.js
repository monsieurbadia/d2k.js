import { Renderable } from './d2k.renderable';
import { Matrix4 } from '../math/d2k.matrix4';
import { Vector3 } from '../math/d2k.vector3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Camera extends Renderable {

  isCamera = true;
  projectionMatrix = new Matrix4();
  modelViewMatrix = new Matrix4();
  worldPosition = new Vector3();

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
  } = {} ) {

    super();

    Object.assign( this, { fov, aspect, near, far, left, right, bottom, top, type } );

  }

  perspective ( { fov, aspect, near, far } = {} ) {

    this.projectionMatrix.toPerspective( { fov, aspect, near, far } );

    return Object.assign( this, { fov, aspect, near, far } );

  }

  orthogonal ( { left, right, bottom, top, near, far } = {} ) {

    this.projectionMatrix.toOrthogonal( { left, right, bottom, top, near, far } );

    return Object.assign( this, { left, right, bottom, top, near, far } );

  }

}
