//1. MATH ALGORITHM\

//Fibonacci(Iterative)
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

//console.log(fibonacci(7))
//time complexity = o(n) : One "for" loop. Loop runs from 2 to n. Each iteration does constant work. Work grows linearly with nz

//space complexity = o(n): You create an array fib that stores n elements. More input → more memory. Rule:
//If you create a new array/object that grows with input → O(n) space

//Is prime number
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
//console.log(isPrime(29));
//time complexity = O(√n): Loop runs from 2 to √n. NOT n, only square root of n. This is better than O(n), but worse than O(log n)

//space complexity = o(1) : No extra arrays. Only a few variables.

//Factorial(Iterative)
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
//console.log(factorial(1))
//time complexity = o(n) : One loop. Runs n times
//space complexity = o(1): Uses a single variable. No extra memory grows with n

//Number is power of 2
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}
//console.log(isPowerOfTwo(9))
//time complexity = o(log n) : Each iteration divides n by 2. Number of steps = how many times you divide by 2
//space complexity: No extra data structures

//Fibonacci(Recursive)
function fibonacciRecursive(n) {
  if (n <= 1) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
//console.log(fibonacciRecursive(21));
//time complexity = O(2ⁿ) : Each call makes two more calls. Those calls make two more calls. Explodes exponentially.
//space complexity = o(n) : Recursive calls go on the call stack. Maximum depth = n

// Factorial(Recursive)
function factorialRecursive(n) {
  if (n < 2) return 1;

  return n * factorialRecursive(n - 1);
}
//console.log(factorialRecursive(120));
//time complexity = o(n2) : Two recursive calls per function. Branching recursion → exponential.
//space complexity = o(n) : Call stack depth grows with n

//2. SEARCH ALGORITHM
// Linear Search Algorithm
function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
//console.log(findIndex([1,2,3,4,5,6], 4))
//time complexity = o(n) : Worst case: element is last or not present. check every element once.
//space complexity = o(1) : No extra memory

//Binary Search Algorithm
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (arr[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}
//console.log(binarySearch([1, 2, 4, 5, 6], 6));

//time complexity = o(log n) : Each loop removes half the array.
//space complexity = o(1) : No recursion, no extra memory

function recursiveBinarySearch(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1,
) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (arr[middleIndex] > target) {
    return recursiveBinarySearch(arr, target, leftIndex, middleIndex - 1);
  } else {
    return recursiveBinarySearch(arr, target, middleIndex + 1, rightIndex);
  }
}

//console.log(binarySearch([1, 2, 4, 5, 6], 4))

//time complexity = o(log n): Each loop removes half the array.
//space complexity = o(n) :  Call stack depth grows with n
/*function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage
let numbers = [5, 1, 4, 2, 8];
console.log(bubbleSort(numbers));*/

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

//console.log(sumArray([1, 2, 3, 4, 5, 6]));

function countVowels(str) {
  if (str.length === 0) {
    return 0;
  }
  const vowels = "aeiou";
  const firstChar = str[0].toLowerCase();

  return (vowels.includes(firstChar) ? 1 : 0) + countVowels(str.slice(1));
}

//console.log(countVowels('ajiboye'))

function findMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] > arr[1]) {
    return arr[0];
  } else {
    return findMax(arr.slice(1));
  }
}

//console.log(findMax([1, 2, 3, 4, 5]));

function findMax(arr) {
  // Base case
  if (arr.length === 1) {
    return arr[0];
  }

  const maxOfRest = findMax(arr.slice(1));

  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

function palindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  const last = str[str.length - 1];
  const first = str[0];
  if (first !== last) {
    return false;
  }

  return palindrome(str.slice(1, -1));
}

//console.log(palindrome('madam'))

function binarySearch2(arr, target) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  if (target === arr[mid]) {
    return true;
  }
  if (arr[mid] > target) {
    return binarySearch.slice((0, mid), target);
  } else {
    return binarySearch(arr.slice(mid + 1), target);
  }
}

//console.log(search([1, 3, 5, 7, 9], 71));

function flatten(arr) {
  if (arr.length === 0) {
    return [];
  }

  const first = arr[0];
  const rest = arr.slice(1);

  if (Array.isArray(first)) {
    return flatten(first).concat(flatten(rest));
  } else {
    return [first].concat(flatten(rest));
  }
}

//console.log(isArray([1, 3, [5, 7], 9]))

function appear(arr, target) {
  if (arr.length === 0) {
    return 0;
  }

  const first = arr[0];
  const rest = arr.slice(1);

  return (first === target ? 1 : 0) + appear(rest, ta);
}

//console.log(appear([5, 1, 4, 4, 2, 8], 4))

function replace(str, target, rep) {
  if (str.length === 0) {
    return "";
  }

  const first = str[0];
  const rest = str.slice(1);

  if (first === target) {
    return rep + replace(rest, target, rep);
  } else {
    return first + replace(rest, target, rep);
  }
}

//console.log(replace("akara", "a", "x"));

// SORTING
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

//console.log(bubbleSort([5, 1, 4, 2, 8]))

// time complexity = O(n^2) : it contains nested loop
// space complexity = O(1) : Sorting is done in one place, no extra array created. Only a few extra variables (temp, swapped).

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert key at the correct position
    arr[j + 1] = key;
  }
  return arr;
}
//console.log('Insertion sort',insertionSort([5, 1, 4, 2, 8]))
// time complexity = O(n^2) : it contains nested loop
// space complexity = O(1) : Sorting is done in one place, no extra array created. Only a few extra variables (key, j).

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

//console.log(quickSort([8, 20, -2, 4, -6]));

/*function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  const sortedArr = []

  while(left.length && right.length){
    if(left[0] <= right[0]){
      sortedArr.push(left.shift())
    }else{
      sortedArr.push(right.shift())
    }
  }

  return [...sortedArr, ...left, ...right]
}
console.log(mergeSort([8, 20, -2, 4, -6]));*/

function mergeSort(arr) {
  if (arr.length < 2) {
   return arr;
  }
  const mid = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid)
   
  return merge(mergeSort(leftArray), mergeSort(rightArray)) 
}


function merge (leftArray, rightArray){    
  const sortedArray = []
  while(leftArray.length && rightArray.length){
    if(leftArray[0] <= rightArray[0]){
      sortedArray.push(leftArray.shift())
    }else{
      sortedArray.push(rightArray.shift())
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray]
}
console.log(mergeSort([8, 20, -2, 4, 7,-6]));

