import { Dom } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const beforerender = ( TARGET, SOURCE ) => {

  const { renderer: { current: renderer } } = TARGET;
  const { engine: { current: engine } } = SOURCE;
  const renders = [ ...renderer.renders, ...engine.renders ];

  const render = _ => renderer.setAnimationLoop( _ => {

    for ( let i = 0; i < renders.length; i++ ) {
      if ( renders[ i ]( renderer.timer.getDelta() ) === null )
        return null;
    }

    renderer.resetState( renderer );
    renderer.render( TARGET.scene.mySceneName, TARGET.camera.current );
    SOURCE.scene.current.render();

  } );

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

  TARGET.renderer.current.setSize( ...Dom.size );

  return Object.assign( {}, {
    onrender: beforerender( TARGET, SOURCE )
  } );

};
