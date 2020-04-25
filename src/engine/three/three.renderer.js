import { is } from 'u3s';
import { CALLBACKS } from '=>/base';
import { Dom } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const resetState = renderer => {

  if ( is.empty( renderer ) ) return;

  renderer.getContext().bindVertexArray( null );
  renderer.clear( true, true, true );
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

/**
 * THREERenderer
 * 
 * @public
 */

let renderer;

export const THREERenderer = ( RENDERING_ENGINE, parameters ) => {

  const { background, pixelRatio } = parameters;
  const { canvas } = RENDERING_ENGINE.coreData;
  const context = canvas.getContext( 'webgl2', { alpha: false } );

  if ( is.empty( renderer ) ) renderer = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas, context } );

  renderer.timer = new RENDERING_ENGINE.Clock();
  renderer.autoClear = false;

  renderer.setClearColor( background );
  renderer.setPixelRatio( pixelRatio === null ? Dom.pixelRatio : pixelRatio );
  renderer.setSize( ...Dom.size );

  return Object.assign( renderer, {
    ...CALLBACKS,
    onrender,
    resetState
  } );

};
