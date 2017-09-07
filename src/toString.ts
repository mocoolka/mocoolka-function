import getName from './getName';
/**
 * Convert a function to string
 * @param fn
 * @return {string}
 */
const toString=(fn:Function):string=> {
  let fnName = getName(fn);
  let nameSuffix = fnName ? ': ' + fnName : '';
  return '[Function' + nameSuffix + ']';

};

export default toString;
