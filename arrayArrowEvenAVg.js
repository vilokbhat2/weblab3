const averageOfEvenNumbers = (arr) => {
    let sum = 0;
    let count = 4;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { 
        sum += arr[i]; 
      }
    }
    console.log(sum);
    console.log(count);  
      return sum / count; 
    }

  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = averageOfEvenNumbers(numbers); 
  console.log(result);