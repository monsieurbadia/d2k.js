import { CONFIG } from '=>/3d-object-builder/base';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const BABYLONController = ( {
  RENDERING_ENGINE,
  config = CONFIG.BABYLON.Controller
} = {} ) => {

  const controller = {};

  if ( config.type === 'virtual' ) {

    const [ leftJoystickArgs, rightJoystickArgs ] = config.args;

    controller.current = {
      left: new RENDERING_ENGINE.VirtualJoystick( leftJoystickArgs ),
      right: new RENDERING_ENGINE.VirtualJoystick( rightJoystickArgs )
    };

  }

  RENDERING_ENGINE.VirtualJoystick.Canvas.style.zIndex = '4';
  
  return controller.current;

};
