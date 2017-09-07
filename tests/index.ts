import {setName,getName,toString} from '../src/index.ts';
test('setName getName', () => {
  const a=()=>{};
  expect(getName(a)).toBe('a');
  expect(getName(setName(a,'b'))).toBe('b');

});
test('', () => {
  const a=()=>{};
  expect(toString(a)).toBe('[Function: a]');
  expect(toString(setName(a,'b'))).toBe('[Function: b]');

});
