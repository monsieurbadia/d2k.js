/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const add = element => document.body.appendChild( element );

/** @public it manages the entire dom */
export const DOM = _ => {

  return {
    add
  };

};

export const createDOM = payload => ( {
  ...payload,
  dom: DOM()
} );