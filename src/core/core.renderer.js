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

/** @see babylonjs-and-pixijs / https://doc.babylonjs.com/resources/babylonjs_and_pixijs */

export const Renderer = Object.freeze( {

  assign: ( TARGET, SOURCE ) => ( { onrender: beforerender( TARGET, SOURCE ) } )

} );
