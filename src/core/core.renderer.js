import { is } from 'u3s';
import { CALLBACK } from '=>/base';
import { Timer } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
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

    if ( is.exist( targetRenderer ) && resize( targetRenderer ) ) {

      if ( is.exist( targetCamera ) ) {

        const width = targetRenderer.domElement.clientWidth;
        const height = targetRenderer.domElement.clientHeight;

        targetCamera.aspect = width / height;
        targetCamera.updateProjectionMatrix();

        switch ( targetCamera.type ) {

          case 'OrthographicCamera':

            const center = { x: width, y: height };

            targetCamera.left = - center.x;
            targetCamera.right = center.x;
            targetCamera.top = center.y;
            targetCamera.bottom = - center.y;

            break;

          default:

            return;

        }

      }

      CALLBACK.resizers.forEach( resizer => resizer( { width, height } ) );

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

  const width = window.innerWidth;
  const height = window.innerHeight;
  const needsToBeResized = renderer.domElement.width !== width || renderer.domElement.height !== height;

  if ( needsToBeResized ) renderer.setSize( width, height );

  return needsToBeResized;

};

export const Renderer = Object.freeze( {

  onrender

} );
