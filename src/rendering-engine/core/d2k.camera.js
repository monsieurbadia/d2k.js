import { Renderable } from '../core/d2k.renderable';
import { Matrix4 } from '../math/d2k.matrix4';
import { Vector3 } from '../math/d2k.vector3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = ( {
  fov = 45 * Math.PI / 180,
  aspect = window.innerWidth / window.innerHeight,
  near = 0.1,
  far = 100,
  type = ''
} = {} ) => instance => {

  instance.type = type;
  instance.isCamera = true;
  instance.fov = fov;
  instance.aspect = aspect;
  instance.near = near;
  instance.far = far;
  instance.projectionMatrix = new Matrix4();
  instance.modelViewMatrix = new Matrix4();
  instance.worldPosition = new Vector3();

  return instance;

};

const createPrototype = instance => {

  instance.perspective = ( { fov, aspect, near, far } = {} ) => {

    instance.projectionMatrix.toPerspective( {
      fov,
      aspect,
      near,
      far
    } );

    Object.assign( instance, { fov, aspect, near, far } );

    return instance;

  };

  instance.orthogonal = ( { left, right, bottom, top, near, far } = {} ) => {

    instance.projectionMatrix.toOrthogonal( {
      left,
      right,
      bottom,
      top,
      near,
      far
    } );

    Object.assign( instance, { left, right, bottom, top, near, far } );

  };

  return instance;

};

const makeInitializing = instance => {

  return instance;

};

export const Camera = function Camera ( config = {} ) {

  Object.assign( this,
    Renderable.extend(
      createConstructor( config ),
      createPrototype,
      makeInitializing
    )
  );

};
