---
title: "JavaScript Array Methods"
date: "July 03, 2021"
tag: "JavaScript"
---

# Array Methods

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