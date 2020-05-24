import { Renderable } from '../core/d2k.renderable';
import { Matrix4 } from '../math/d2k.matrix4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Plane extends Renderable {
  
  viewMatrix = new Matrix4();
  indices = [ 0, 1, 2, 1, 2, 3 ];
  vertices = [ -1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0,-1.0, 0.0, 1.0,-1.0, 0.0 ];
  colors = [ 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0 ];

  constructor ( {
    name = ''
  } = {} ) {

    super();

    this.name = name;

  }

}
