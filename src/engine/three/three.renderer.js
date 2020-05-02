import { is } from 'u3s';
import { __, CALLBACK } from '=>/base';
import { Dom } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const onrender = ( {
  engine: targetEngine,
  renderer: targetRenderer,
  scene: targetScene,
  camera: targetCamera
} = {
  engine: {},
  renderer: {},
  scene: {},
  camera: {}
}, {
  scene: sourceScene
} = {
  scene: {}
} ) => {

  const render = _ => {

    for ( let i = 0; i < CALLBACK.renders.length; i++ ) {
      if ( CALLBACK.renders[ i ]( targetRenderer.timer.getDelta() ) === null )
        return null;
    }

    if ( resize( targetRenderer ) ) {

      if ( is.exist( targetCamera ) ) {

        targetCamera.aspect = targetRenderer.domElement.clientWidth / targetRenderer.domElement.clientHeight;
        targetCamera.updateProjectionMatrix();

      }

      CALLBACK.resizers.forEach( resizer => resizer( [ targetRenderer.domElement.clientWidth, targetRenderer.domElement.clientHeight ] ) );

    }

    if ( is.exist( targetRenderer ) || is.exist( targetEngine ) ) {

      targetRenderer.getContext().bindVertexArray( null );
      targetRenderer.state.reset();
      targetRenderer.render( targetScene, targetCamera );

      if ( is.exist( targetEngine ) ) {
        targetEngine.render();
      }

      if ( is.exist( sourceScene ) ) {
        sourceScene.render();
      }

    }

    window.requestAnimationFrame( render );

  };

  render();

};

const assign = ( TARGET, SOURCE ) => onrender( TARGET, SOURCE );

const clean = renderer => {

  renderer.clear();
  renderer.dispose();

};

const resize = renderer => {

  const width = window.innerWidth;
  const height = window.innerHeight;
  const needsToBeResized = renderer.domElement.width !== width || renderer.domElement.height !== height;

  if ( needsToBeResized ) renderer.setSize( width, height );

  return needsToBeResized;

};

export const THREERenderer = ( { RENDERING_ENGINE, config: { background, pixelRatio } } ) => {

  const renderer = __.OBJECT;
  const { canvas } = RENDERING_ENGINE.coreData;
  const context = canvas.getContext( 'webgl2', { alpha: false } );
  const currentPixelRatio = !is.exist( pixelRatio ) ? Dom.pixelRatio : pixelRatio;

  if ( is.empty( renderer.current ) ) renderer.current = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas, context } );

  renderer.current.timer = new RENDERING_ENGINE.Clock();
  renderer.current.autoClear = false;

  renderer.current.setClearColor( background );
  renderer.current.setPixelRatio( currentPixelRatio );

  return Object.assign( renderer.current, {
    ...CALLBACK,
    onrender,
    assign,
    clean
  } );

};
