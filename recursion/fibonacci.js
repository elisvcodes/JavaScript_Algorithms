// Using recursion to calculate our Fibonacci Sequence
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 2) + fib(n - 1);
}

fib(5);