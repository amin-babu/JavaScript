const numbers = [1, 2, 4, 4, 6, 8, 10, 2, 8, 12, 13, 19];

function dupli(value, index){
  return numbers.indexOf(value) !== index;
}

const duplicates = numbers.filter(dupli);
console.log(duplicates);

function uniqueFun(value, index){
  return numbers.indexOf(value) === index;
}

const uniqueValues = numbers.filter(uniqueFun);
console.log(uniqueValues);