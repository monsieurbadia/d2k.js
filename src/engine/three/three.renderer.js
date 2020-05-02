import { is } from 'u3s';
import { CALLBACK } from '=>/base';
import { Dom, Renderer } from '=>/core';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const assign = ( TARGET, SOURCE ) => Renderer.onrender( TARGET, SOURCE );

const clean = renderer => {

  renderer.clear();
  renderer.dispose();

};

export const THREERenderer = ( {
  RENDERING_ENGINE,
  config = {
    alpha: true,
    antialias: true,
    autoClear: true,
    background: 0x000000,
    pixelRatio: window.devicePixelRatio
  }
} = {} ) => {

  const renderer = Object.create( null );
  const { canvas } = RENDERING_ENGINE.coreData;
  const context = canvas.getContext( 'webgl2' );
  const currentPixelRatio = !is.exist( config.pixelRatio ) ? Dom.pixelRatio : config.pixelRatio;

  if ( is.empty( renderer.current ) ) {
    
    renderer.current = new RENDERING_ENGINE.WebGLRenderer( {
      alpha: config.alpha,
      antialias: config.antialias,
      canvas, context
    } );

  }

  renderer.current.timer = new RENDERING_ENGINE.Clock();
  renderer.current.autoClear = config.autoClear;

  renderer.current.setClearColor( config.background );
  renderer.current.setPixelRatio( currentPixelRatio );

  return Object.assign( renderer.current, {
    ...CALLBACK,
    ...Renderer,
    assign,
    clean
  } );

};
