const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', () => {
  const inputString = document.getElementById('inputString').value;
  const sortedString = inputString.split('').sort().join('');
  document.getElementById('output').innerHTML = sortedString;
});
