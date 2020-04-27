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

export const THREERenderer = ( RENDERING_ENGINE, parameter ) => {

  const renderer = {};
  const { canvas } = RENDERING_ENGINE.coreData;
  const context = canvas.getContext( 'webgl2', { alpha: false } );
  const pixelRatio = !is.exist( parameter.pixelRatio ) ? Dom.pixelRatio : parameter.pixelRatio;

  if ( is.empty( renderer.current ) ) renderer.current = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas, context } );

  renderer.current.timer = new RENDERING_ENGINE.Clock();
  renderer.current.autoClear = false;

  renderer.current.setClearColor( parameter.background );
  renderer.current.setPixelRatio( pixelRatio );

  return Object.assign( renderer.current, {
    ...CALLBACKS,
    onrender,
    resetState
  } );

};
