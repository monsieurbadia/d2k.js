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

export const Dom = {

  get body () { return document.body; },
  get pixelRatio () { return window.devicePixelRatio; },
  get size () { return [ window.innerWidth, window.innerHeight ]; },

  add,
  setCanvasSize

};
