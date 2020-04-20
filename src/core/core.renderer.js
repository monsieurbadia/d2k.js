/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

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

/** @public */
const onrender = ( BABYLON, THREE ) => {

  /** @private */
  const render = _ => {

    window.requestAnimationFrame( render );

    onresetstate( THREE.renderer.current );

    THREE.renderer.current.render( THREE.scene.current, THREE.camera.current );
    BABYLON.scene.current.render();

  };

  return f => {

    render();
    if (f) f();

  };

};

/** @see use threejs and babylonjs together on one canvas? https://github.com/BabylonJS/Babylon.js/issues/3447 */
export const Renderer = ( ENGINES ) => {

  const BABYLON = ENGINES[ 0 ];
  const THREE = ENGINES[ 1 ];

  return Object.assign( {},  {
    onrender: onrender( BABYLON, THREE )
  } );

};
