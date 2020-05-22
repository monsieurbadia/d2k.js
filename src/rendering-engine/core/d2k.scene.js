import { uniqid } from 'u3s';
import { Archetype } from './d2k.archetype';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const createConstructor = _ => instance => {

  instance.uuid = uniqid();
  instance.name = '';
  instance.type = 'scene';
  instance.isScene = true;
  instance.children = [];

  return instance;

};

const createPrototype = instance => {

  instance.add = object3d => {

    instance.children.push( object3d );

    return instance;

  };

  return instance;

};

const makeInitializing = instance => {

  return instance;

};

export const Scene = function Scene () {

  Object.assign( this, 
    Archetype.extend(
      createConstructor(),
      createPrototype,
      makeInitializing
    )
  );

};
