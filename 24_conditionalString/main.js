console.log("Is 'apple' == 'apple'? I predict True.");
console.log('apple' === 'apple');
console.log("Is 'apple' != 'orange'? I predict True.");
console.log('apple' !== 'orange');
// Tests using the lower case function
console.log("Is 'HELLO' lower case? I predict False.");
console.log('HELLO'.toLowerCase() === 'hello');
console.log("Is 10 == 10? I predict True.");
console.log(10 === 10);
console.log("Is 5 > 3? I predict True.");
console.log(5 > 3);
console.log("Is 7 < 4? I predict False.");
console.log(7 < 4);
console.log("Is 8 >= 8? I predict True.");
console.log(8 >= 8);
console.log("Is 6 <= 5? I predict False.");
console.log(6 <= 5);
// Tests using "and" and "or" operators
console.log("Is (2 < 5) and (7 > 3)? I predict True.");
console.log((2 < 5) && (7 > 3));
console.log("Is (10 == 5) or (6 < 3)? I predict False.");
console.log((10 == 5) || (6 < 3));
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
