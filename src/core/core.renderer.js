/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const beforerender = ( THREE, SOURCE ) => {

  /** @private */
  const render = _ => THREE.renderer.current.setAnimationLoop( _ => {

    THREE.renderer.current.resetState( THREE.renderer.current );
    THREE.renderer.current?.renders.forEach( render => render( THREE.renderer.current.timer.getDelta() ) );

    THREE.renderer.current.render( THREE.scene.mySceneName, THREE.camera.current );
    SOURCE.scene.current.render();
  
  } );

  /** @public */
  return f => {

    if ( f ) THREE.renderer.current?.renders.push( f );

    render();

  };

};

/**
 * renderer
 * 
 * @public 
 * @see threejs-and-babylonjs-together-on-one-canvas / https://github.com/BabylonJS/Babylon.js/issues/3447
 */

export const Renderer = ( [ TARGET, SOURCE ] ) => {

  const THREEstarter = TARGET;
  const BABYLONstarter = SOURCE;

  THREEstarter.renderer.current.setSize( window.innerWidth, window.innerHeight );

  return Object.assign( {}, {
    onrender: beforerender( THREEstarter, BABYLONstarter )
  } );

};
