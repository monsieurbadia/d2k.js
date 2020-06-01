import { Matrix4 } from '../math/d2k.matrix4';
import { Renderable } from '../core/d2k.renderable';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Tetrahedron extends Renderable {

  colors = [ 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0 ];
  matrix = new Matrix4();
  normals = [];

  indices = [
    0, 1, 2,
    0, 1, 3,
    1, 2, 3,
    0, 2, 3 
  ];

  vertices = [
    -1, -1, -1,  1, 0, 0,
     1, -1, -1,  0, 1, 0,
     0, -1,  1,  0, 0, 1,
     0,  1,  0,  1, 1, 1
  ];

}
