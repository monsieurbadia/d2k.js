import { is } from 'u3s';
import { CALLBACK } from '=>/base';
import { Dom } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const beforerenderlayering = ( { TARGET, SOURCE } ) => {

  const { renderer: { current: renderer } } = TARGET;
  const { engine: { current: engine } } = SOURCE;
  const renders = [ ...renderer.renders, ...engine.renders ];

  const render = _ => renderer.setAnimationLoop( _ => {

    for ( let i = 0; i < renders.length; i++ ) {
      if ( renders[ i ]( renderer.timer.getDelta() ) === null )
        return null;
    }

    renderer.getContext().bindVertexArray( null );
    renderer.state.reset();
    renderer.render( TARGET.scene.mySceneName, TARGET.camera.current );
    SOURCE.scene.current.render();

  } );

  return f => {

    render();
    
    if ( f ) renders.push( f );

  };

};

const onrender = ( { renderer, scene, camera } ) => {

  renderer.setAnimationLoop( _ => {

    for ( let i = 0; i < renderer.renders.length; i++ ) {
      if ( renderer.renders[ i ]( renderer.timer.getDelta() ) === null )
        return null;
    }
    
    if ( resize( renderer ) ) {

      if ( is.exist( camera ) ) {

        camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
        camera.updateProjectionMatrix();

      }

      renderer.resizers.forEach( resizer => resizer( [ renderer.domElement.clientWidth, renderer.domElement.clientHeight ] ) );

    }

    renderer.render( scene, camera );

  } );

};

const assign = ( TARGET, SOURCE ) => ( { onrenderlayering: beforerenderlayering( { TARGET, SOURCE } ) } );

const clean = renderer => {

  renderer.clear();
  renderer.dispose();

};

const resize = renderer => {

  const width = window.innerWidth;
  const height = window.innerHeight;
  const needsToBeResized = renderer.domElement.width !== width || renderer.domElement.height !== height;

  if ( needsToBeResized ) renderer.setSize( width, height );

  return needsToBeResized;

};

export const THREERenderer = ( RENDERING_ENGINE, { background, pixelRatio } ) => {

  const renderer = Object.create( null );
  const { canvas } = RENDERING_ENGINE.coreData;
  const context = canvas.getContext( 'webgl2', { alpha: false } );
  const currentPixelRatio = !is.exist( pixelRatio ) ? Dom.pixelRatio : pixelRatio;

  if ( is.empty( renderer.current ) ) renderer.current = new RENDERING_ENGINE.WebGLRenderer( { antialias: true, canvas, context } );

  renderer.current.timer = new RENDERING_ENGINE.Clock();
  renderer.current.autoClear = false;

  renderer.current.setClearColor( background );
  renderer.current.setPixelRatio( currentPixelRatio );

  return Object.assign( renderer.current, {
    ...CALLBACK,
    onrender,
    assign,
    clean
  } );

};
