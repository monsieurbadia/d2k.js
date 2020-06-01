/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Color {

  r: number | undefined;
  g: number | undefined;
  b: number | undefined;
  color: number = 0x000000;

  constructor ( color: number ) {

    this.parse( color );

  };

  parse ( colorValue: number = this.color ): this {

    const hex = Math.floor( colorValue );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
    this.b = ( hex & 255 ) / 255;

    return this;

  };

}
