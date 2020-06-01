import { uniqid } from 'u3s';
import { Renderable } from '../core/d2k.renderable';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Triangle extends Renderable {

  uuid = uniqid();

  colors = [ 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0 ];
  indices = [ 0, 1, 2 ];
  normals = [];
  positions = [ 0, 1, 0, 1, -1, 0, -1, -1, 0 ];
  vertices = [ 0,  1, 0, 1, -1, 0, -1, -1, 0 ];

  constructor ( {
    name = ''
  } = {} ) {

    super();

    this.name = name;

  }

}
