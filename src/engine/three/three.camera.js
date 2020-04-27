import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREECamera = ( RENDERING_ENGINE, { args, name, position, type } ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'camera' );
  const parsedArgs = args.map( arg => arg === null || arg === undefined ? ( arg = window.innerWidth / window.innerHeight ) : arg );
  const camera = new RENDERING_ENGINE[ instanceName ]( ...parsedArgs );

  camera.name = name;

  camera.position.set( ...position );

  return camera;

};
