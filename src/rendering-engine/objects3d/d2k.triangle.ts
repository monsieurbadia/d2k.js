import { uniqid } from 'u3s/src/u3s';
import { Renderable } from '../core/d2k.renderable';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Triangle extends Renderable {

  uuid = uniqid();

  colors: number[] = [ 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0 ];
  indices: number[] = [ 0, 1, 2 ];
  normals: number[] = [];
  positions: number[] = [ 0, 1, 0, 1, -1, 0, -1, -1, 0 ];
  vertices: number[] = [ 0,  1, 0, 1, -1, 0, -1, -1, 0 ];

  constructor ( {
    name = ''
  }: {
    name?: string
  } = {} ) {

    super();

    Object.assign( this, { name } ); 

  }

}
