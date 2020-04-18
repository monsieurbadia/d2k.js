import { is, oftype } from 'u3s';
import { EVENTS } from '=>/core/core.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public it is a wrapper to be able to pass a callback function inside the setAnimationLoop method. */
const onrender = ( renderer, scene, camera, start ) => renderer.setAnimationLoop( start !== null ? _ => {

  EVENTS.renders.forEach( render => render( renderer.timer.getDelta() ) );

  renderer.render( scene, camera );

} : null );

/**
 * Renderer
 * 
 * @public
 */

export const THREERenderer = ( ENGINE, parameters ) => {

  if ( oftype( parameters ) !== 'object' || is.empty( parameters ) ) return; // do i have to return new WebGLRenderer() without config, if no params 

  const renderer = new ENGINE.WebGLRenderer( { antialias: true } );

  renderer.setClearColor( 0x000000 );
  renderer.setPixelRatio( parameters.pixelRatio );
  renderer.setSize( ...parameters.size, true );
  renderer.timer = new ENGINE.Clock();

  return Object.assign( renderer, {
    onrender
  } );

};
