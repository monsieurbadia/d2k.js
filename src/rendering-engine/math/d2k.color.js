import { pipe } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = color => instance => {

  instance.color = color;

  return instance;

};

const createPrototype = instance => {

  instance.parse = ( colorValue = instance.color ) => {

    const hex = Math.floor( colorValue );

		instance.r = ( hex >> 16 & 255 ) / 255;
		instance.g = ( hex >> 8 & 255 ) / 255;
    instance.b = ( hex & 255 ) / 255;

    return instance;

  };

  return instance;

};

const makeInitializing = instance => {

  instance.parse( instance.color );

  return instance;

};

export const Color = function Color ( config = {} ) {

  return pipe(
    createConstructor( config ),
    createPrototype,
    makeInitializing
  )( this );

};
