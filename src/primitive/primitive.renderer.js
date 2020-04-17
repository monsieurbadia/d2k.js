import { reducer } from 'u3s';
import { EVENTS } from '../base/base.events';

/** @public it is a wrapper to be able to pass a callback function inside the setAnimationLoop method. */
const onrender = ( renderer, scene, camera, start ) => renderer.setAnimationLoop( start !== null ? _ => {

  EVENTS.renders.forEach( render => render( renderer.timer.getDelta() ) );

  renderer.render( scene, camera );

} : null );

/**
 * Renderer
 * 
 * @private
 */

const Renderer = ( THREE, parameters ) => {

  const renderer = new THREE.WebGLRenderer();

  renderer.setClearColor( 0x000000 );
  renderer.setPixelRatio( parameters.pixelRatio );
  renderer.setSize( ...parameters.size, true );
  renderer.timer = new THREE.Clock();

  return Object.assign( renderer, {
    onrender
  } );

};

/**
 * createRenderer
 * 
 * @public
 * */

export const createRenderer = payload => ( {
  ...payload,
  renderer: reducer( payload.renderer, result => Renderer( payload.THREE, result ) )
} );
