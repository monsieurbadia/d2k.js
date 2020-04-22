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

export const THREERenderer = ( RENDERING_ENGINE, parameters ) => {

  const { canvas } = RENDERING_ENGINE.coreData;
  const renderer = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas } );

  renderer.timer = new RENDERING_ENGINE.Clock();
  renderer.autoClear = false;

  renderer.setClearColor( parameters.background );
  renderer.setPixelRatio( parameters.pixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  return Object.assign( renderer, {
    ...EVENTS,
    onrender,
    resetState
  } );

};
