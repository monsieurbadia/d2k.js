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

export const THREERenderer = ( { RENDERING_ENGINE, config: { background, pixelRatio } } ) => {

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
    ...Renderer,
    assign,
    clean
  } );

};
