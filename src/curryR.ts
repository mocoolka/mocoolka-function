import curry from './curry';
/**
 * Curry a function from right
 * @param fn
 */
const curryR = (fn:Function):Function=> curry(fn, true);
export default curryR;
