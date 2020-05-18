import { onrender, onstarter } from '=>/starter';
import { Object3d } from '=>/objects3d/d2k';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const d2k = _ =>
  (
    Object
      .freeze( {
        onrender,
        onstarter
      } )
  );

module.exports = d2k();