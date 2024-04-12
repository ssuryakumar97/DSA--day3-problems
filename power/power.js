function power(num, powerVal) {
    if(powerVal == 1) return num
    return power(num, powerVal-1) * num
}

console.log(power(2,5))
console.log(power(3,5))
console.log(power(4,5))
console.log(power(5,10))
console.log(power(2,10))
console.log(power(8,5))