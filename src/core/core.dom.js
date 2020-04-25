/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const setCanvasSize = ( element, width = window.innerWidth, height = window.innerHeight ) => {
    
  element.width = width;
  element.height = height;
  
  element.style.width = `${ width }px`;
  element.style.height = `${ height }px`;

};

/** @public */
export const Dom = {

  get pixelRatio () { return window.pixelRatio; },

  get size () { return [ window.innerWidth, window.innerHeight ]; },

  setCanvasSize

};
