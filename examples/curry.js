import * as M from '../lib/';
const greet = (salutation, title, name) =>`${salutation}, ${title} ${name}!`;
console.log(M.curry(greet)('Hello', 'Ms.', 'Li'))
//the following are equivalent ->Hello, Ms. Li!
console.log(M.curry(greet)('Hello', 'Ms.', 'Li'))
console.log(M.curry(greet)('Hello', 'Ms.', 'Li'));
console.log(M.curry(greet)('Hello', 'Ms.', 'Li'));
console.log(M.curry(greet)('Hello', 'Ms.')('Li'));
console.log(M.curry(greet)(M.__, 'Ms.', 'Li')('Hello'));
console.log(M.curry(greet)('Hello', M.__, 'Li')('Ms.'));
console.log(M.curry(greet)(M.__, M.__, 'Li')('Hello', 'Ms.'));
console.log(M.curry(greet)(M.__, M. __, 'Li')('Hello')('Ms.'));

