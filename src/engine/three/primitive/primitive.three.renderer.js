import { is, oftype } from 'u3s';
import { EVENTS } from '=>/core/core.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const resetState = renderer => {

  if ( !renderer ) return;

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

/** @public it is a wrapper to be able to pass a callback function inside the setAnimationLoop method. */
const onrender = ( f, renderer, scene, camera ) =>
  renderer.setAnimationLoop( oftype( f ) !== 'null' ? _ => {

    renderer.renders.forEach( render => render( renderer.timer.getDelta() ) );
    renderer.render( scene, camera );

  } : null );

/**
 * THREERenderer
 * 
 * @public
 */

export const THREERenderer = ( ENGINE, parameters ) => {

  if ( oftype( ENGINE ) !== 'object' || is.empty( ENGINE ) ) return;

  const canvas = ENGINE.coreData.canvas;
  const renderer = new ENGINE.WebGLRenderer( { antialias: true, canvas } );

  renderer.timer = new ENGINE.Clock();
  renderer.autoClear = false;

  renderer.setClearColor( parameters?.background );
  renderer.setPixelRatio( parameters?.pixelRatio );

  return Object.assign( renderer, {
    ...EVENTS,
    onrender,
    resetState
  } );

};
