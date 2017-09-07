import create  from '../create';
import getName  from '../getName';


/**
 * Returns a new function which is equivalent to the given function,
 * except that the new function's length property is equal to given length.
 * This does not limit the function to using that number of arguments.
 * It's only effect is on the reported length.
 * @since v0.1.0
 * @keywords wrap
 * @param {number} length -The function parameter's number
 * @param {Function} fn - The function be wrap
 * @param {boolean} isNew - True register new Function
 * @return {Function} New function
 */
const arity = (length:number, fn:Function, isNew:boolean =false):Function=> {
  /* istanbul ignore next */
  length = length < 0?0:length;

  let parameters:string[] =new Array(length);
  for (let i = 0; i < length; ++i) {
    parameters[i] = 'a'+i;
  }

  let params = parameters.join();
  let code:string=isNew?`return function (${params}) { return  new fn( ${params}); };`:
    `return function (${params}) { return fn.apply(this, arguments); };`;

  return create(getName(fn), ['fn'], code)(fn);
};

export default arity;

