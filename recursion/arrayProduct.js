// Multiplying items in the array

const product = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * product(arr.slice(1));
}

product([1, 2, 3])