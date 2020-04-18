import { EVENTS } from '../base/base.events';

/** @public */
export const onloader = f => EVENTS.loaders.push( f );
