import {curry,__} from '../src/index.ts';
const greet = (salutation, title, name) =>`${salutation}, ${title} ${name}!`;
const result = 'Hello, Ms. Li!';
test('curry', () => {
    expect(curry(greet)('Hello', 'Ms.', 'Li')).toBe(result);
    expect(curry(greet)('Hello', 'Ms.')('Li')).toBe(result);
    expect(curry(greet)('Hello')('Ms.', 'Li')).toBe(result);
    expect(curry(greet)('Hello')('Ms.')('Li')).toBe(result);
    expect(curry(greet)('Hello', __, 'Li')('Ms.')).toBe(result);
    expect(curry(greet)(__, __, 'Li')('Hello', 'Ms.')).toBe(result);
    expect(curry(greet)(__,  __, 'Li')('Hello')('Ms.')).toBe(result);
  });
