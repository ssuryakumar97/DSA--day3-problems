function reverse(string) {
    if(string.length ==0) return string
    return string[string.length-1] + reverse(string.slice(0,string.length-1))
}

console.log(reverse("hello"));
console.log(reverse("awesome"));
console.log(reverse("string"));
console.log(reverse("nature"))
console.log(reverse("World"));