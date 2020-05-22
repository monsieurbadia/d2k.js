import { Archetype } from './d2k.archetype';
import { Matrix4 } from '../math/d2k.matrix4';
import { Vector3 } from '../math/d2k.vector3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = _ => instance => {

  instance.children = [];

  instance.matrix = new Matrix4();
  instance.worldMatrix = new Matrix4();

  instance.position = new Vector3();
  instance.rotation = new Vector3();
  instance.scale = new Vector3( 1 );

  return instance;

};

const createPrototype = instance => {

  return instance;

};

export const Renderable = {

  ...Object.assign( {},
    Archetype.extend(
      createConstructor(),
      createPrototype
    )
  )

};
