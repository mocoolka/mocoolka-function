const  {curryR,__} = require('../lib/');

const greet = (salutation, title, name) =>`${salutation}, ${title} ${name}!`;

//the following are equivalent ->Hello, Ms. Li!
console.log(curryR(greet)('Li', 'Ms.', 'Hello'));
console.log(curryR(greet)('Li')('Ms.')('Hello'));
console.log(curryR(greet)('Li', __, 'Hello')('Ms.'));
console.log(curryR(greet)(__, 'Ms.', 'Hello')('Li'));
console.log(curryR(greet)(__, __, 'Hello')('Li', 'Ms.'));
console.log(curryR(greet)(__, __, 'Hello')('Li')('Ms.'));
