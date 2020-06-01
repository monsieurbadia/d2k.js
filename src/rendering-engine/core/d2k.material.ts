import { Color } from '../math/d2k.color';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Material {

  color: Color;

  constructor ( { color = 0x00fff0 }:{ color?: number } = {} ) {

    this.color = new Color( color );

  }

}
