/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const add = element => document.body.appendChild( element );

/** @public */
const createHTMLElement = tagName => document.createElement( tagName );

/** @public it manages the entire dom */
export const DOM = ENGINE => {

  const canvas = createHTMLElement( 'canvas' );
  const width = window.innerWidth;
  const height = window.innerHeight;

  // canvas size cannot be applied with merge engine..
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${ width }px`;
  canvas.style.height = `${ height }px`;

  ENGINE.d2kCoreData.canvas = !ENGINE.d2kCoreData.canvas ? canvas : ENGINE.d2kCoreData.canvas;

  return {
    add,
    canvas,
    createHTMLElement
  };

};
