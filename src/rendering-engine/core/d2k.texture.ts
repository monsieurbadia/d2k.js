/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


const isPowerOf2: ( value: number ) => boolean = ( value ) => ( value & ( value - 1 ) ) == 0;


// TOTO: - gltf support - image support - async
export class Texture {

  loadTexture ( { gl, url }: { gl?: any | WebGLRenderingContext, url?: string } ) {

    const texture = gl.createTexture();
    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array( [ 0, 0, 255, 255 ] );
    const image: HTMLImageElement = new Image();

    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.texImage2D( gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel );
  
    image.onload = _ => {

      gl.bindTexture( gl.TEXTURE_2D, texture );
      gl.texImage2D( gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image );
  
      if ( isPowerOf2( image.width ) && isPowerOf2( image.height ) ) {

        gl.generateMipmap( gl.TEXTURE_2D );

      } else {

        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );

      }

    };

    if ( url ) image.src = url;

    return texture;

  }

}
