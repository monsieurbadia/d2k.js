import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONCamera = ( {
  RENDERING_ENGINE,
  config = {
    args: [ 0, 0, 2 ],
    name: 'current-camera',
    type: 'follow'
  }
} = {} ) => {

  const camera = {};
  const { canvas, scene } = RENDERING_ENGINE.coreData;
  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'camera' );
  
  if ( instanceName === 'ArcRotateCamera' ) {
    
    const [ alpha = Math.PI / 2, beta = Math.PI / 2, radius = 2, target = [ 0, 0, 0 ] ] = config.args;

    camera.current = new RENDERING_ENGINE[ instanceName ](
      config.name, alpha, beta, radius, new RENDERING_ENGINE.Vector3( ...target ), scene
    );

  } else {

    camera.current = new RENDERING_ENGINE[ instanceName ](
      config.name, new RENDERING_ENGINE.Vector3( ...config.args ), scene
    );

  }

  camera.current.setTarget( new RENDERING_ENGINE.Vector3.Zero() );
  scene.activeCamera.attachControl( canvas, true );

  return camera.current;

};
