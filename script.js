const numbers = [40, 5, 12, 5, 17, 50, 30];

function myFunction(value, index, array){
  return value > 60;
}

const newNumbers = numbers.some(myFunction);
console.log(numbers.includes(5, 4));