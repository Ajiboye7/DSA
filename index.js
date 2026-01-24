function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}
//console.log(fibonacci(10));

/*function binarySearch(array, target) {
  if (!array) return -1;
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  while (leftIndex <= rightIndex) {
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6], 4));*/

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

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

//console.log(factorial(1))

function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}
//console.log(isPowerOfTwo(9))

function fibonacciRecursive(n) {
  if (n <= 1) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//console.log(fibonacciRecursive(21));

function factorialRecursive(n) {
  if (n < 2) return 1;

  return factorialRecursive(n - 1) * factorialRecursive(n - 2);
}

//console.log(factorialRecursive(120));

function findIndex(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return i;
    }
  }
  return -1;
}

//console.log(findIndex([1,2,3,4,5,6], 4))

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

console.log(binarySearch([1, 2, 4, 5, 6], 6));
