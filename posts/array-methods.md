---
title: "JavaScript Array Methods"
date: "July 03, 2021"
tag: "JavaScript"
---

# Array Methods

These are some of the array methods that I use pretty frequently.

## .at()

Takes an integer value, either negative or positive, and returns the value at that index. If the value is negative, it counts back from the end of the array, starting at -1.

```jsx
const arr = [12, 16, 34, 94, 7];

console.log(arr.at(2)); // returns 34
console.log(arr.at(-2)); // returns 94
```

## .concat()

Returns a new array with the two arrays merged together. 

```jsx
const arr1 = [2, 4, 6, 8];
const arr2 = [1, 3, 5, 7];
const arr3 = arr1.concat(arr2);
console.log(arr3); // returns [2, 4, 6, 8, 1, 3, 5, 7]

```

## .copyWithin()

Copies part of another array to the designated index without changing the length. (This is a little confusing).

`array.copyWithin(index where copy goes, first index value to copy, last index value to copy)`

```jsx
const arr = [a, b, c, d, e, f];

// Copy to index 1 the values starting at index 3, ending at index 4 (non-inclusive)
console.log(arr.copyWithin(1, 3, 4);
// result: [a, d, c, d, e, f]

// Copy to index 0 all elements from 3 to the end
console.log(arr.copyWithin(0, 3);
// result: [d, e, f, d, c, d]
```

## .every()

Tests whether ALL elements in the array pass a test implemented by the function inside. Returns a Boolean value.

```jsx
const group = [16, 54, 20, 19, 25, 36];

console.log(group.every(num => {
	num >= 21;
}));

// returns false
```

## .fill()

Changes elements in an array with static value you provide, starting and ending where you choose (default is 0 and end of array)

```jsx
const arr = [2, 4, 5, 18, 16, 71];

// Fill array with value 1 starting at index 2 to index 4 (inclusive)
console.log(arr.fill(1, 2, 4));
// Output: [2, 4, 1, 1, 1, 71]
```

## .filter()

Returns a new array with only elements that pass the test you put in place

```jsx
let scores = [69, 81, 95, 100, 99, 56];

let passingScores = scores.filter(score => score >= 80);

console.log(passingScores); // returns [81, 95, 99]
```

## .forEach()

Executes a provided function once for each array element.

```jsx
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## .map()

Returns a new array populated with the results of calling a function on each element in the array

```jsx
let ages = [10, 11, 14, 20];

let doubleAges = ages.map(age => {
	return age * 2; 
})

console.log(doubleAges);
// returns [20, 22, 28, 40];
```

## .push()

It adds the new element to the end of the array and returns the length of the updated array

```jsx
let animals = [dog, cat, fish];

let numberAnimals = animals.push('crab');

console.log(numberAnimals); // returns 4 bc of the length
console.log(animals); // returns [dog, cat, fish, crab];
```

## .pop()

It removes the last element of an array and returns the removed element.

```jsx
// Using array from above
console.log(animals.pop()); // returns crab 

```

## .includes()

Checks if the value is in the array, and returns true or false

```jsx
let numbers = [1, 10, 16];
console.log(numbers.includes(10)); // returns true
```

## .slice(start, end)

Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

```jsx
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```

## .splice(start, deleteCount)

```jsx
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

## .sort()

Sorts the elements of an array in place and returns the sorted array.

```jsx
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```