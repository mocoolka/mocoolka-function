import {curryR,__} from '../src/index.ts';
const greet = (salutation, title, name) =>`${salutation}, ${title} ${name}!`;
const result = 'Li, Ms. Hello!';
test('curry', () => {
  expect(curryR(greet)('Hello', 'Ms.', 'Li')).toBe(result);
  expect(curryR(greet)('Hello', 'Ms.')('Li')).toBe(result);
  expect(curryR(greet)('Hello')('Ms.', 'Li')).toBe(result);
  expect(curryR(greet)('Hello')('Ms.')('Li')).toBe(result);
  expect(curryR(greet)('Hello', __, 'Li')('Ms.')).toBe(result);
  expect(curryR(greet)(__, __, 'Li')('Hello', 'Ms.')).toBe(result);
  expect(curryR(greet)(__,  __, 'Li')('Hello')('Ms.')).toBe(result);
});
