import arity from './internal/arity';
import isPlaceholder from './internal/isPlaceholder';
import setName from './setName';
import getName from './getName';
const _curryN = (length:number, received:Array<any>, fn:Function, reverse:boolean=false):Function=> {
  let temp = function (...args) {

    let combined:any[] = [];
    let argsIdx = 0;
    let left:number = length;

    let combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < args.length) {

      let result;

      //  get result from current arguments when placeholder is true otherwise get from received
      if (combinedIdx < received.length &&
        (!isPlaceholder(received[combinedIdx]) ||
        argsIdx >= args.length)) {
        result = received[combinedIdx];
      } else {
        result = args[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;
      if (!isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    if (left <= 0) {
      return (reverse === true)?fn.apply(null, combined.reverse()):fn.apply(null, combined);
    } else {
      return arity(left, _curryN(length, combined, fn, reverse));
    }
  };
  setName(temp,getName(fn));
  return temp;
};
/**
 * Returns a curried equivalent of the provided function.
 * The curried function has two unusual capabilities.
 * First, its arguments needn't be provided one at a time.
 * If f is a ternary function and g is curry(f), the following are equivalent:
 *
 * - g(1)(2)(3)
 * - g(1)(2, 3)
 * - g(1, 2)(3)
 * - g(1, 2, 3)
 * Secondly, the special placeholder value __ may be used to specify "gaps",
 * allowing partial application of any combination of arguments,
 * regardless of their positions. If g is as above and _ is placeholder,
 * the following are equivalent:
 * g(1, 2, 3)
 * - g(__, 2, 3)(1)
 * - g(__, __, 3)(1)(2)
 * - g(__, __, 3)(1, 2)
 * - g(__, 2)(1)(3)
 * - g(__, 2)(1, 3)
 * - g(__, 2)(__, 3)(1)
 * @since v0.1.0
 * @category Arity
 * @ts Number -> (* -> a) -> (* -> a)
 * @keywords wrap
 * @param {number} length -The param number in new function.
 * @param {Function} fn The function to curry.
 * @param {boolean} [reverse]
 * True meaning The given function call params from left to right.
 * False meaning The given function call params from right to left
 * @return {Function} A new curried function.
 */
const curryN = (fn:Function, length:number, reverse:boolean=false):Function=> {
  /* istanbul ignore next */
  length = length < 0?0:length;

  return arity(length, _curryN(length, [], fn, reverse));

};

export default curryN;
