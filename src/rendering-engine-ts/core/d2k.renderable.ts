import { Matrix4 } from '../math/d2k.matrix4';
import { Vector3 } from '../math/d2k.vector3';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Renderable {

  matrix = new Matrix4();
  worldMatrix = new Matrix4();
  position = new Vector3();
  rotation = new Vector3();
  scale = new Vector3( 1 );

}

