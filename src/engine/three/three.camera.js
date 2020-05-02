import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREECamera = ( {
  RENDERING_ENGINE,
  config = {
    args: [ 75, window.innerWidth / window.innerHeight, 0.1, 1000 ],
    name: 'current-camera',
    position: [ 0, 0, 80 ],
    type: 'perspective'
  }
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'camera' );
  const parsedArgs = config.args.map( arg => ( arg === null || arg === undefined ) ? ( arg = window.innerWidth / window.innerHeight ) : arg );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parsedArgs );

  camera.name = config.name;

  camera.position.set( ...config.position );

  return camera;

};
