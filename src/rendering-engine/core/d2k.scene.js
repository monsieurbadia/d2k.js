import { uniqid } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Scene {

  children = [];
  uuid = uniqid();
  name = '';
  type = 'scene';
  isScene = true;

  add = object3d => {

    this.children.push( object3d );

    return this;

  };

}
