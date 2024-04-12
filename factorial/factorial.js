// Write a recursive function to calculate the factorial of a number.

// ? What is a factorial?
// factorial(0) => 1
// factorial(1) => 1 
// factorial(2) => 2 * 1 => 2 * factorial(1)
// factorial(3) => 3 * 2 * 1 => 3 * factorial(2)
// factorial(4) => 4 * 3 * 2 * 1 => 4 * factorial(3)
// factorial(5) => 5 * 4 * 3 * 2 * 1 => 5 * factorial(4)
// factorial(6) => 6 * 5 * 4 * 3 * 2 * 1 => 6 * factorial(5)

function factorial(num) {
    if (num < 1) return 1
    return num * factorial(num-1)
}

console.log(factorial(1))