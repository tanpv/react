// // let
// if (true) {
//   let a = 40;
//   console.log(a);
// }
// console.log(a);

// // arrow function
// let f = (a,b) => a+b;
// console.log(f(1,2));

// // for of loop
// let arr = [1,2,3,4];
// for (let value of arr) {
//   console.log(value)
// }

// // spread : list of parameter in to array
// let sum = (...arr) => {
//   console.log(arr);
//   let sum = 0;
//   for (let item of arr) {
//     sum += item;
//   }
//   console.log(sum)
// }
// sum(1,2,3,4);

// const multiply = (number) => number * 2;
// console.log(multiply(10));

// class Human {
//   constructor() {
//     this.gender = 'male';
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super()
//     this.name = 'Max';
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// const p = new Person();
// p.printMyName();
// p.printGender();

// const numbers = [1,2,3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//   name : 'Max'
// };

// const newPerson = {
//   ...person,
//   age: 28
// }

// console.log(newPerson);

// const filter = (...args) => {
//   return args.filter(el => el === 1);
// }
// console.log(filter(1,2,3));

// const numbers = [1,2,3];
// [num1, ,num3] = numbers;
// console.log(num1, num3);

// const numbers = [1,2,3];
// const doubleNumArray = numbers.map((num) => {
//   return 2 * num;
// });
// console.log(doubleNumArray);















