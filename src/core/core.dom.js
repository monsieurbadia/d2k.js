/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const add = element => document.body.appendChild( element );

/** @public */
const createHTMLElement = tagName => document.createElement( tagName );

/** @public */
const setSize = ( { canvas, width, height } ) => {

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${ width }px`;
  canvas.style.height = `${ height }px`;

};

/** @public */
export const DOM = _ => {

  const canvas = createHTMLElement( 'canvas' );
  const width = window.innerWidth;
  const height = window.innerHeight;

  setSize( { canvas, width, height } );

  return {
    add,
    canvas,
    setSize,
    createHTMLElement
  };

};
