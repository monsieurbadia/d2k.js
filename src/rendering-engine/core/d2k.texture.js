import { Archetype } from './d2k.archetype';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

// TOTO: - gltf support - image support - async
const createConstructor = ( { url } ) => instance => {

  instance.url = url;

  return instance;

};

const createPrototype = instance => instance;

export const Texture = function Texture ( config ) {

  Object.assign( this,
    Archetype.extend(
      createConstructor( config ),
      createPrototype
    ) 
  );

};
