function fibonacciHelper( ind, prev, current){
    if(ind == 1) return prev
    if(ind < 4) return prev+current
    return fibonacciHelper(ind-1 ,current, prev+current  )
}

function fibonacci(num) {
    return fibonacciHelper(num, 0, 1)
}
// 5,0,1 ==> 4,1,1 ==> 3,1, 2 ==> 2,2,3 ==> 1, 3, 5

console.log(fibonacci(6))
console.log(fibonacci(5))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))


// 0 1 1 2 3 5 8 13 20 32 52 84 
