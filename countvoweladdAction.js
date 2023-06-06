const countButton = document.getElementById('countButton');
countButton.addEventListener('click', () => {
  const inputString = document.getElementById('inputString').value;
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (vowels.indexOf(inputString[i]) !== -1) {
      count++;
    }
  }
  document.getElementById('output').innerHTML = `The number of vowels in the string is ${count}.`;
});
