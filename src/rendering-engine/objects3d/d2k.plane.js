import { Renderable } from '../core/d2k.renderable';
import { Matrix4 } from '../math/d2k.matrix4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = ( {
  name = ''
} = {} ) => instance => {

  instance.name = name;
  instance.viewMatrix = new Matrix4();

  instance.indices = [
    0, 1, 2,
    1, 2, 3,
  ];

  instance.positions = [ 
    -1.0, 1.0, 0.0,
     1.0, 1.0, 0.0, 
    -1.0,-1.0, 0.0,
     1.0,-1.0, 0.0 
  ];

  instance.colors = [ 
    1.0, 0.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    1.0, 1.0, 0.0, 1.0 
  ];

  return instance;

};

const createPrototype = instance => instance;

export const Plane = function Plane ( config = {} ) {

  Object.assign( this,
    Renderable.extend(
      createConstructor( config ),
      createPrototype
    )
  );

};
