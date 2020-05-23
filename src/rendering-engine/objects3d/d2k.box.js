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

  instance.normals = [
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
    
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
    
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
    
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
    
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
    
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0
  ];

  instance.positions = [ 
    -0.5, -0.5,  0.5,
     0.5, -0.5,  0.5,
     0.5,  0.5,  0.5,
    -0.5,  0.5,  0.5,

    -0.5, -0.5, -0.5,
     0.5, -0.5, -0.5,
     0.5,  0.5, -0.5,
    -0.5,  0.5, -0.5,

     0.5,  0.5,  0.5,
    -0.5,  0.5,  0.5,
    -0.5,  0.5, -0.5,
     0.5,  0.5, -0.5,

    -0.5, -0.5,  0.5,
     0.5, -0.5,  0.5,
     0.5, -0.5, -0.5,
    -0.5, -0.5, -0.5,

     0.5, -0.5,  0.5,
     0.5,  0.5,  0.5,
     0.5,  0.5, -0.5,
     0.5, -0.5, -0.5,

    -0.5, -0.5,  0.5,
    -0.5,  0.5,  0.5,
    -0.5,  0.5, -0.5,
    -0.5, -0.5, -0.5 
  ];

  instance.colors = [];

  const colors = [
    [ 1.0, 0.0, 0.0, 1.0 ],
    [ 1.0, 1.0, 0.0, 1.0 ],
    [ 0.0, 1.0, 0.0, 1.0 ],
    [ 1.0, 0.5, 0.5, 1.0 ],
    [ 1.0, 0.0, 1.0, 1.0 ],
    [ 0.0, 0.0, 1.0, 1.0 ] 
  ];

  for ( let i in colors ) {
    let color = colors[ i ];
    for ( let j = 0; j < 4; j++ ) {
      instance.colors = instance.colors.concat( color );
    }
  }

  instance.indices = [
    0,  1,  2,    0,  2 , 3,
    4,  5,  6,    4,  6 , 7,
    8,  9, 10,    8, 10, 11,
    12, 13, 14,   12, 14, 15,
    16, 17, 18,   16, 18, 19,
    20, 21, 22,   20, 22, 23
  ];

  return instance;

};

const createPrototype = instance => instance;

export const Box = function Box ( config = {} ) {

  return Object.assign( this,
    Renderable.extend(
      createConstructor( config ),
      createPrototype
    )
  );

};
