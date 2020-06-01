import { uniqid } from 'u3s/src/u3s';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Scene {

  uuid: void = uniqid();
  children: object[] = [];
  isScene: boolean = true;
  name: string = '';
  type: string = 'scene';

  add ( object3d: object ): this {

    this.children.push( object3d );

    return this;

  };

}
