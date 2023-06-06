const getLengths = (arr) => {
    const lengths = [];
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      const length = prompt(`Enter the length of the string '${str}':`);
      lengths.push(length);
    }
    return lengths;
  }

const strings = ['foo', 'bar', 'baz'];
const lengths = getLengths(strings);
console.log(lengths); // Output: ['3', '3', '3']
