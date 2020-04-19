/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const add = element => document.body.appendChild( element );

/** @public */
const createHTMLElement = tagName => document.createElement( tagName );

/** @public it manages the entire dom */
export const DOM = _ => {

  const canvas = createHTMLElement( 'canvas' );

  return {
    add,
    webGl: { canvas },
    createHTMLElement
  };

};
