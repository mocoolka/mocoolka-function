import setName from './setName';
/**
 * Create a Function with those param
 * @param name
 * @param params
 * @param functionBody
 * @return {Function}
 */
const create = (name:string, params, functionBody:string):Function=> {
  let temp = new Function(params, functionBody);
  setName(temp, name);
  return temp;
};

export default  create;
