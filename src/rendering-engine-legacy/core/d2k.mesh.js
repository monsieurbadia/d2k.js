import { Renderable } from './d2k.renderable';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

let _geometry = null;
let _material = null;

export class Mesh extends Renderable {

  get geometry () {

    return _geometry;

  }

  set geometry ( value ) {
    
    _geometry = value;

    return this;

  }

  get material () {

    return _material;

  }

  set material ( value ) {
    
    _material = value;

    return this;
  }

  constructor ( { geometry, material } = {} ) {

    super();

    this.geometry = geometry;
    this.material = material;

  }

}
