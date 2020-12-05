// Checking to see if our Array contains a negative value

const isOdd = (num) => num % 2 !== 0;

const hasOdd = (arr, isOdd) => {
    if (arr.length === 0) return false;
    if (isOdd(arr[0])) return true;
    return hasOdd(arr.slice(1), isOdd);
}

hasOdd([1, 2, 3, 4, 6], isOdd);