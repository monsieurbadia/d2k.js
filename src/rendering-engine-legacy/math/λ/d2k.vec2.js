import { ARRAY_TYPE } from './d2k.base';

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
export function fromValues(x, y) {
  let out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
export function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}