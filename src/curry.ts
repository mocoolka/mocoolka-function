import curryN from './curryN';
/**
 * Returns a curried equivalent of the provided function.
 * The curried function has two unusual capabilities.
 * First, its arguments needn't be provided one at a time.
 * If f is a ternary function and g is curry(f), the following are equivalent:
 *
 * - `g(1)(2)(3)`
 * - `g(1)(2, 3)`
 * - `g(1, 2)(3)`
 * - `g(1, 2, 3)`
 * Secondly, the special placeholder value __ may be used to specify "gaps",
 * allowing partial application of any combination of arguments,
 * regardless of their positions. If g is as above and _ is placeholder,
 * the following are equivalent:
 * - `g(1, 2, 3)`
 * - `g(__, 2, 3)(1)`
 * - `g(__, __, 3)(1)(2)`
 * - `g(__, __, 3)(1, 2)`
 * - `g(__, 2)(1)(3)`
 * - `g(__, 2)(1, 3)`
 * - `g(__, 2)(__, 3)(1)`
 * @since v0.1.0
 * @category Arity
 * @ts `(* -> a) -> (* -> a)`
 * @keywords wrap
 * @param {Function} fn The function to curry.
 * @param {boolean} [reverse]
 * True meaning The given function call params from left to right.
 * False meaning The given function call params from right to left
 * @return {Function} A new curried function.
 */
const  curry = (fn:Function, reverse:boolean=false):Function=> curryN( fn,fn.length, reverse);
export default curry;
