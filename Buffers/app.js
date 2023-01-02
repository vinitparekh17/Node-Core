const { Buffer } = require('buffer');
const buff = Buffer.alloc(6); // alloc means how many bytes to allocate to the buffer

// let's write some data to the buffer

buff.write('Hello', 'utf8'); 
// write the string 'Hello' to the buffer starting at index 0 and ending at index 5  

console.log(buff.toJSON());
//Output: { type: 'Buffer', data: [ 72, 101, 108, 108, 111, 0 ] }

//  If i put a string that is longer than the buffer,
// it will only write the first 6 characters

// buffer kinda act like an array but the difference is that
// it is a fixed size and it is a global object of nodejs

// There are several mathods to deal with buffers

console.log(buff.toString("utf-16le")); // response in different encoding