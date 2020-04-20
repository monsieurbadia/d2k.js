import { is, oftype } from 'u3s';
import { EVENTS } from '=>/core/core.events';

/** @private */
const onresetstate = renderer => {
  
  const gl = renderer.getContext();

  gl.enable( gl.DEPTH_TEST );
  gl.depthFunc( gl.LEQUAL );
  gl.enable( gl.CULL_FACE );
  gl.cullFace( gl.BACK );
  gl.clearDepth(1);
  gl.clear( gl.DEPTH_BUFFER_BIT );
  gl.bindVertexArray( null );

  renderer.state.reset();

};

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public it is a wrapper to be able to pass a callback function inside the setAnimationLoop method. */
const onrender = ( renderer, scene, camera, start ) => renderer.setAnimationLoop( start !== null ? _ => {

  EVENTS.renders.forEach( render => render( renderer.timer.getDelta() ) );

  renderer.render( scene, camera );

} : null );

/**
 * THREERenderer
 * 
 * @public
 */

export const THREERenderer = ( ENGINE, parameters ) => {

  if ( oftype( ENGINE ) !== 'object' || is.empty( ENGINE ) ) return;

  const canvas = ENGINE.d2kCoreData.canvas;
  const renderer = new ENGINE.WebGLRenderer( { antialias: true, canvas } );

  renderer.timer = new ENGINE.Clock();
  renderer.autoClear = false;

  renderer.setClearColor( 0x000000 );
  renderer.setPixelRatio( parameters.pixelRatio );

  return Object.assign( renderer, {
    onrender
  } );

};
