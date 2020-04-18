import { EVENTS } from '../base/base.events';

/** @public */
export const onloader = f => typeof f === 'function' && EVENTS.loaders.push( f );
