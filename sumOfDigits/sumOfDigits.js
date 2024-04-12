function sumOfDigits(num){
    if(num<10) return num
    return num%10 + sumOfDigits(Math.floor(num/10))
}

console.log(sumOfDigits(123456))


//123%10 = 3
//123/10 = 12.3 math.floor = 12%10 =2
// 3 + sumOfDigits(12) => 3+ 2+ sumOfDigits(1) ==> 3+2+1