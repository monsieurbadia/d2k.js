import { Archetype } from './d2k.archetype';
import { Color } from '../math/d2k.color';

const createConstructor = ( { color = 0x00fff0 } = {} ) => instance => {

  instance.color = new Color( color );

  return instance;

};

const createPrototype = instance => {

  return instance;

};

export const Material = function Material ( config ) {

  return Object.assign( this,
    Archetype.extend(
      createConstructor( config ),
      createPrototype
    )
  );

};

console.log( new Material() );
