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
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (arr[middleIndex] > target) {
      return recursiveBinarySearch(arr, target, leftIndex, middleIndex - 1);
    } else {
      return recursiveBinarySearch(arr, target, mid + 1, rightIndex);
    }
  }
}

//console.log(binarySearch([1, 2, 4, 5, 6], 4))

//time complexity = o(log n): Each loop removes half the array.
//space complexity = o(n) :  Call stack depth grows with n