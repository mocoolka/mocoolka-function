/**
 * Gets the name of a function, in a cross-browser way.
 *
 * @param {Function} fn function (usually a constructor)
 * @return {string}
 */

const name = (fn:Function):string=> {
  let functionName:string = fn['displayName'] == null ? fn['name'] : fn['displayName'];
  if (!functionName) {
    /* istanbul ignore next */
    let match = /^\s?function ([^(]*)\(/.exec(fn.toString());
    /* istanbul ignore next */
    functionName= match && match[1] ? match[1] : '';
  }
  return functionName;
};

export default name;
