import { is } from 'u3s';
import { CALLBACK } from '=>/base';
import { Dom, Timer } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const onrender = ( {
  engine: targetEngine,
  renderer: targetRenderer,
  scene: targetScene,
  camera: targetCamera
} = {}, {
  scene: sourceScene
} = {} ) => {

  const render = _ => {

    for ( let i = 0; i < CALLBACK.renders.length; i++ ) {
      if ( CALLBACK.renders[ i ]( Timer.getDelta() ) === null )
        return null;
    }

    if ( is.exist( targetRenderer ) && resize( targetRenderer ) || is.exist( targetEngine ) && resize( targetEngine ) ) {

      const canvas = targetRenderer ? targetRenderer.domElement : targetEngine.getRenderingCanvas();
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if ( is.exist( targetCamera ) ) {

        targetCamera.aspect = width / height;
        targetCamera.updateProjectionMatrix();

        if ( targetCamera.type === 'OrthographicCamera' ) {

          const center = { x: width, y: height };

          targetCamera.left = - center.x;
          targetCamera.right = center.x;
          targetCamera.top = center.y;
          targetCamera.bottom = - center.y;

        }

        CALLBACK.resizers.forEach( resizer => resizer( { width, height } ) );

      } else {

        targetEngine.resize();

      }

    }

    if ( is.exist( targetRenderer ) || is.exist( targetEngine ) ) {

      if ( targetRenderer?.getContext ) {

        targetRenderer.getContext().bindVertexArray( null );
        targetRenderer.state.reset();
        targetRenderer.render( targetScene, targetCamera );

      }

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

  const pixelRatio = Dom.pixelRatio;
  const width = Dom.size.width * pixelRatio;
  const height = Dom.size.height * pixelRatio;
  const canvas = renderer.domElement || renderer.getRenderingCanvas();
  const needsToBeResized = canvas.width !== width || canvas.height !== height;

  if ( needsToBeResized ) {
    renderer.setSize( width, height );
  }

  return needsToBeResized;

};

export const Renderer = Object.freeze( {

  onrender

} );
