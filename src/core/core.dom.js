/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const add = ( element, child ) => element.appendChild( child );

const setCanvasSize = ( element, width = window.innerWidth, height = window.innerHeight ) => {

  element.width = width;
  element.height = height;
  element.style.width = `${ width }px`;
  element.style.height = `${ height }px`;

};

const getContext = _ => {

  const context = {
    WebGLRenderingContext: 'webgl',
    WebGL2RenderingContext: 'webgl2',
  };

  let canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
  let gl = null;

  try {

    gl = canvas.getContext( 'webgl2' );

    if ( !gl ) gl = canvas.getContext( 'webgl' );

  } catch ( error ) {

    gl = null;
  
    console.warn( error );

  }

  canvas = null;

  return context[ gl.constructor.name ];

};

export const Dom = {

  get body () { return document.body; },
  get pixelRatio () { return window.devicePixelRatio; },
  get size () { return { width: window.innerWidth, height: window.innerHeight }; },
  get context () { return getContext() },

  add,
  setCanvasSize

};
