import { is } from 'u3s';
import { eventsCallback } from '=>/core/core.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const resetState = renderer => {

  if ( is.empty( renderer ) ) return;

  const gl = renderer.getContext();

  gl.enable( gl.DEPTH_TEST );
  gl.depthFunc( gl.LEQUAL );
  gl.enable( gl.CULL_FACE );
  gl.cullFace( gl.BACK );
  gl.clearDepth( 1 );
  gl.clear( gl.DEPTH_BUFFER_BIT );
  gl.bindVertexArray( null );

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

  if ( is.empty( renderer ) ) renderer = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas } );

  renderer.timer = new RENDERING_ENGINE.Clock();
  renderer.autoClear = false;

  renderer.setClearColor( background );
  renderer.setPixelRatio( pixelRatio === 0 ? window.pixelRatio : pixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  return Object.assign( renderer, {
    ...eventsCallback,
    onrender,
    resetState
  } );

};
