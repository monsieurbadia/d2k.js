import { onrender, onstarter } from '=>/starter';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const d2k = _ =>
  (
    Object
      .freeze( {
        onrender,
        onstarter
      } )
  );

module.exports =  d2k();
