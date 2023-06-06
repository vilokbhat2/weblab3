const sumEvens = (arr) => {
    let sum = 0; // Initialize the sum to 0
    
    // Iterate over the array and check if each number is even
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    
    return sum;
  };
  let arr=[1,2,3,4,5,6,7,8]
  document.write(sumEvens(arr));