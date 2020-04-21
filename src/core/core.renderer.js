/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const beforerender = ( THREE, BABYLON ) => {

  /** @private */
  const render = _ => THREE.renderer.current.setAnimationLoop( _ => {

    THREE.renderer.current.resetState( THREE.renderer.current );
    THREE.renderer.current?.renders.forEach( render => render( THREE.renderer.current.timer.getDelta() ) );
    THREE.renderer.current.render( THREE.scene.current, THREE.camera.current );
    BABYLON.scene.current.render();
  
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

export const Renderer = ENGINES => {

  const THREE = ENGINES[ 0 ];
  const BABYLON = ENGINES[ 1 ];

  THREE.renderer.current.setSize( window.innerWidth, window.innerHeight );

  return Object.assign( {}, {
    onrender: beforerender( THREE, BABYLON )
  } );

};
