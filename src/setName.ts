/**
 * Set given function name
 * @param fn
 * @param name
 * @return {Function}
 */
const setName = (fn:Function, name:String):Function=> {
  //Object.defineProperty(fn, 'name', { writable: true });
  //fn.name = name;
  fn['displayName'] = name;
  //Object.defineProperty(fn, 'name', { writable: false });
  return fn;
};

export default setName;
