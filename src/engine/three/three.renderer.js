import { is } from 'u3s';
import { CALLBACKS } from '=>/base';
import { Dom } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const resetState = renderer => {

  if ( is.empty( renderer ) ) return;

  renderer.getContext().bindVertexArray( null );
  renderer.state.reset();

};

const onrender = ( { renderer, scene, camera } ) =>
  renderer.setAnimationLoop( _ => {

    for ( let i = 0; i < renderer.renders.length; i++ ) {
      if ( renderer.renders[ i ]( renderer.timer.getDelta() ) === null )
        return null;
    }
    
    renderer.render( scene, camera );

  } );

export const THREERenderer = ( RENDERING_ENGINE, { background, pixelRatio } ) => {

  const renderer = {};
  const { canvas } = RENDERING_ENGINE.coreData;
  const context = canvas.getContext( 'webgl2', { alpha: false } );
  const currentPixelRatio = !is.exist( pixelRatio ) ? Dom.pixelRatio : pixelRatio;

  if ( is.empty( renderer.current ) ) renderer.current = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas, context } );

  renderer.current.timer = new RENDERING_ENGINE.Clock();
  renderer.current.autoClear = false;

  renderer.current.setClearColor( background );
  renderer.current.setPixelRatio( currentPixelRatio );

  return Object.assign( renderer.current, {
    ...CALLBACKS,
    onrender,
    resetState
  } );

};
