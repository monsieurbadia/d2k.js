import { EVENTS } from '../base/base.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public it adds callbacks relative to the render event */
export const onrender = f => typeof f === 'function' && EVENTS.renders.push( f );
