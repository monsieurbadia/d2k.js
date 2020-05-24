import { Color } from '../math/d2k.color';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Material {

  constructor ( { color = 0x00fff0 } = {} ) {

    this.color = new Color( color );

  }

}
