const dashTwixt2Evens = (num) => {
    let numStr = num.toString(); // Convert number to string for easier manipulation
    let result = numStr[0]; // Initialize result with the first digit of the number
    
    // Iterate over the remaining digits of the number and check for pairs of even numbers
    for(let i = 1; i < numStr.length; i++) {
      if(numStr[i-1] % 2 === 0 && numStr[i] % 2 === 0) {
        result += "-" + numStr[i];
      } else {
        result += numStr[i];
      }
    }
    
    return result;
  };
document.write(dashTwixt2Evens(prompt("enter the number insert dash for even")))  