import { is } from 'u3s';
import { CALLBACK } from '=>/base';

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
        targetScene.render();
      }

      if ( is.exist( sourceScene ) ) {
        sourceScene.render();
      }

    }

    window.requestAnimationFrame( render );

  };

  render();

};

const resize = renderer => {

  const width = window.innerWidth;
  const height = window.innerHeight;
  const needsToBeResized = renderer.domElement.width !== width || renderer.domElement.height !== height;

  if ( needsToBeResized ) renderer.setSize( width, height );

  return needsToBeResized;

};

export const Renderer = Object.freeze( {

  onrender

} );
