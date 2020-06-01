import { Renderable } from './d2k.renderable';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


let _geometry: null | object = null;
let _material: null | object = null;


export class Mesh extends Renderable {

  get geometry () {
    return _geometry;
  }

  set geometry ( value ) {
    _geometry = value;
  }

  get material () {
    return _material;
  }

  set material ( value ) {
    _material = value;
  }

  constructor ( { geometry, material }: { geometry?: object, material?: object } = {} ) {

    super();

    Object.assign( this, { geometry, material } );

  }

}
