import { DOM } from '=>/core/core';

/** @public */
export const createDOM = payload => ( {
  ...payload,
  dom: DOM()
} );
