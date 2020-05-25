import { Matrix4 } from '../math/d2k.matrix4';
import { Renderable } from '../core/d2k.renderable';
import { Vector4 } from '../math/d2k.vector4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Box extends Renderable {

  colors = [];
  matrix = new Matrix4();
  name = '';

  constructor ( { color = [ 1.0, 0.5, 0.5, 0.0 ] } = {} ) {

    super();
    
    this.baseColors = [
      new Vector4( ...color ).value,
      new Vector4( ...color ).value,
      new Vector4( ...color ).value,
      new Vector4( ...color ).value,
      new Vector4( ...color ).value,
      new Vector4( ...color ).value
    ];
    
    this.colors = this.processColors();

  }

  processColors ( colors = this.baseColors ) {

    for ( let i in colors ) {
      
      let color = colors[ i ];
      
      for ( let j = 0; j < 4; j++ ) {
      
        this.colors = this.colors.concat( color );
      
      }
    
    }

    return this.colors;

  };

  textures = [
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,

    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
  ];

  normals = [
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

  vertices = [ 
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

  indices = [
    0,  1,  2,    0,  2 , 3,
    4,  5,  6,    4,  6 , 7,
    8,  9, 10,    8, 10, 11,
    12, 13, 14,   12, 14, 15,
    16, 17, 18,   16, 18, 19,
    20, 21, 22,   20, 22, 23
  ];

}
