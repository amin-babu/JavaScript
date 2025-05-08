function Person(first, last, age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function(){
    return this.firstName + ' ' + this.lastName;
  };
};

const rakib = new Person('Rakib', 'Hossain', 22);
let sakib = new Person('Sakib', 'Al Hasan', 32);

sakib.country = 'Bangladesh';

console.log(rakib);
