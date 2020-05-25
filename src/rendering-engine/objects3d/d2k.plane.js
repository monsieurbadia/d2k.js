import { flatten } from 'u3s';
import { Renderable } from '../core/d2k.renderable';
import { Matrix4 } from '../math/d2k.matrix4';
import { Vector3 } from '../math/d2k.vector3';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Plane extends Renderable {
  
  colors = [ 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0 ];
  indices = [ 0, 1, 2, 1, 2, 3 ];
  normals = [];
  viewMatrix = new Matrix4();

  constructor ( {
    name = '',
    width = 1,
    height = 1
  } = {} ) {

    super();

    Object.assign( this, { width, height } );

    this.name = name;

    this.init();

  }

  init () {

    const width_half = this.width / 2;
    const height_half = this.height / 2;

    this.vertices = flatten( [
      new Vector3( -width_half,  height_half, 0 ).value,
      new Vector3(  width_half,  height_half, 0 ).value,
      new Vector3( -width_half, -height_half, 0 ).value,
      new Vector3(  width_half, -height_half, 0 ).value
    ] );
    
  }

}
