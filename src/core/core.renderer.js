/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const beforerender = ( THREE, SOURCE ) => {

  const { renderer: { current: renderer } } = THREE;
  const { engine: { current: engine } } = SOURCE;
  const renders = [ ...renderer.renders, ...engine.renders ];

  /** @private */
  const render = _ => renderer.setAnimationLoop( _ => {

    for ( let i = 0; i < renders.length; i++ ) {
      if ( renders[ i ]( renderer.timer.getDelta() ) === null )
        return null;
    }

    renderer.resetState( renderer );
    renderer.render( THREE.scene.mySceneName, THREE.camera.current );
    SOURCE.scene.current.render();

  } );

  /** @public */
  return f => {

    render();
    
    if ( f ) renders.push( f );

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
