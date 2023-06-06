// Arrow function for reversing the number
const reverseNumber = number => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)

console.log(reverseNumber(12345))
