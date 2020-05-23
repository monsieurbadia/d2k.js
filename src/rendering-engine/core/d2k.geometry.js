import { Archetype } from './d2k.archetype';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = instance => {

  instance.attributes = {};

  return instance;

};

const createPrototype = instance => instance;

export const Geometry = function Geometry () {

  Object.assign( this,
    Archetype.extend(
      createConstructor(),
      createPrototype
    )
  );

};
