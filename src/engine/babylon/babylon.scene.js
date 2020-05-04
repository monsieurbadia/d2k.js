import { is } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONScene = ( {
  RENDERING_ENGINE,
  config = {
    autoClear: true,
    clearColor: [ 0, 0, 0 ]
  }
} = {} ) => {

  const { engine } = RENDERING_ENGINE.coreData;
  const scene = new RENDERING_ENGINE.Scene( engine );
  const cleanCache = _ => engine.wipeCaches( true );

  // TODO: dynamic
  if ( is.exist( config.clearColor ) ) scene.clearColor = new RENDERING_ENGINE.Color3( ...config.clearColor );

  scene.autoClear = config.autoClear;
  scene.beforeRender = cleanCache;
  RENDERING_ENGINE.coreData.scene = scene;

  return scene;

};
