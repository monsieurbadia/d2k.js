/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Color {

  constructor ( color ) {

    this.parse( color );

  };

  parse = ( colorValue = this.color ) => {

    const hex = Math.floor( colorValue );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
    this.b = ( hex & 255 ) / 255;

    return this;

  };

}
