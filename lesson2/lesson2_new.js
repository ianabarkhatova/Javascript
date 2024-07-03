//warm up
//1
// const a = { test: 'value' }; //#123
// const b = { test: 'value' }; //#543
// const c = a;
// c.test = 'new value';

// console.log(a == b); //? false
// console.log(c); //?
// console.log(a); //?

//push(), pop(), shift(), unshift() - мутабельные

//push()

// const names = ['Bob', 'Alex', 'Igor', 'Viktar'];
// const result = names.push('Jena', 'Sveta');

// console.log('names: ', names); //names:  [ 'Bob', 'Alex', 'Igor', 'Viktar', 'Jena', 'Sveta' ]
// console.log('result: ', result);//result:  6

// pop()

// const names = ['Bob', 'Alex', 'Igor', 'Viktar'];
// const popResult = names.pop();

// console.log('names: ', names); //names:  [ 'Bob', 'Alex', 'Igor' ]
// console.log('popResult: ', popResult);//popResult:  Viktar

//shift()
// const names = ['Bob', 'Alex', 'Igor', 'Viktar'];
// const shiftedResult = names.shift();

// console.log('names: ', names); //names:  [ 'Alex', 'Igor', 'Viktar' ]
// console.log('shiftedResult: ', shiftedResult);//shiftedResult:  Bob

// const arr = [];
// const res = arr.shift();

// console.log('res: ', res);//res:  undefined

//unshift()

// const names = ['Bob', 'Alex', 'Igor', 'Viktar'];
// const unshiftedResult = names.unshift('test1', 'test2');

// console.log('Names: ', names);//Names:  [ 'test1', 'test2', 'Bob', 'Alex', 'Igor', 'Viktar' ]
// console.log('unshiftedResultL: ', unshiftedResult);//unshiftedResultL:  6

//reverse() - методом массива, мутабельный (мутирует исх массив)

// const telephoneNumber = [1, 2, 3, 4, 5, 6];
// const result = telephoneNumber.reverse();

// console.log(telephoneNumber);//[ 6, 5, 4, 3, 2, 1 ]
// console.log(result);//[ 6, 5, 4, 3, 2, 1 ]

//toReversed()

//split() - метод для работы со строками

//1)

// const str = 'ab-cd-ef';
// const res = str.split('-');

// console.log('res: ', res); //res:  [ 'ab', 'cd', 'ef' ]

//2
// const str = 'ab-cd-ef';
// const res = str.split('-', 1);

// console.log('res: ', res);//res:  [ 'ab' ]

//3
// const str = 'ab-cd-ef';

// const res = str.split('');

// console.log('res: ', res);//res:  [
//     'a', 'b', '-',
//     'c', 'd', '-',
//     'e', 'f'
//   ]

//4

// const str = 'ab-cd-ef';
// const res = str.split();

// console.log('res: ', res);//res:  [ 'ab-cd-ef' ]

// test example

// const str = 'New Test Value';

// const res = str.split(' ');

// console.log('res: ', res);//res:  [ 'New', 'Test', 'Value' ]

//new example

// const str = 'New Test Value';

// const res = str.split(' ', 2);

// console.log('res: ', res); //res:  [ 'New', 'Test' ]

// join()
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join('-');

// console.log('joinResukt: ', joinResult);//joinResukt:  "Alex-Bob-Ivan-Sasha"

//2 - если нет разделителя то по дефолту это запятая
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join();

// console.log('res: ', res);//res:  "Alex,Bob,Ivan,Sasha"

//3 если пустая строка то сольет элементы без разделителя

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('');

// console.log('res: ', res); //res:  "AlexBobIvanSasha"

//Tech Interview popular question

// const telephoneNumber = '123-456-789'; // ['1', '2']
// const reversedValue = telephoneNumber.split('').reverse().join('');

// console.log('res: ', res);
// console.log('reversedValue: ', reversedValue); //reversedValue:  987-654-321

//concat - сливать наши массивы (объединять их)

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res = arr1.concat(arr2, arr3);

// console.log('res', res);//res [ 1, 2, 3, 4, 5, 6 ]

//example 2

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res = arr1.concat(arr2, arr3, 7, 8, 9);

// console.log('res: ', res); //res:  [
// //     1, 2, 3, 4, 5,
// //     6, 7, 8, 9
// //   ]

//example 3

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const nestedArr = [['val1', 'val2']];

// const res = arr1.concat(arr2, nestedArr);

// // console.log(res); //[ 1, 2, 3, 4, [ 'val1', 'val2' ] ]

// console.log(res.flat(Infinity));//[ 1, 2, 3, 4, 'val1', 'val2' ]

//test task
// let usersFromAPI1 = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
// ];

// let usersFromAPI2 = [
//   { id: 3, name: 'Charlie' },
//   { id: 4, name: 'David' },
// ];

// const result = usersFromAPI1.concat(usersFromAPI2);
// console.log(result);//[
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' }
//   ]

// [...oldTasks, newTask]

// const arr1 = [1, 2];

// const res = arr1.concat();

// console.log(arr1);//[ 1, 2 ]
// console.log(res);//[ 1, 2, 3, 4 ]

//test
// const arr1 = [1, 2];

// const res = arr1.concat();

// console.log(res == arr1);//false

//forEach()

//arr.forEach(function(el, index, arr) => {})

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// const res = arr.forEach(function (el) {
//   sum += el;
// });

// console.log(sum);//15

//real Task

// let users = [
//   { id: 1, name: 'Alice', lastActive: '2023-06-01', isActive: false },
//   { id: 2, name: 'Bob', lastActive: '2024-05-25', isActive: false },
//   { id: 3, name: 'Charlie', lastActive: '2024-06-20', isActive: false },
// ];

// let oneMonthAgo = new Date();
// //console.log(oneMonthAgo); //2024-06-26T16:22:40.037Z

// oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

// users.forEach((user) => {
//   let lastActiveDate = new Date(user.lastActive);
//   //   console.log(lastActiveDate);
//   if (lastActiveDate > oneMonthAgo) {
//     user.isActive = true;
//   }
// });

// console.log(users);

//indexOf() -

// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
// const res = arr.indexOf(3);

// console.log('res: ', res);//2

//
// const arr = [1, 2, 4];
// const res = arr.indexOf(5);

// console.log(res);//-1

//

// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
// const res = arr.indexOf(3, 4);

// console.log('res: ', res);//res:  6

// let allowedIPs = ['192.168.1.1', '192.168.1.2', '192.168.1.3'];
// let userIP = '192.168.1.4';

// if (allowedIPs.indexOf(userIP) !== -1) {
//   console.log('Accesss granted');
// } else {
//   console.log('access denied');
// }

//lastIndexOf()

// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
// const res = arr.lastIndexOf(3);

// console.log('res: ', res);//res:  8

//test task

// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
// const res = arr.lastIndexOf(3, -3);

// console.log(res);//6

//find()

// const arr = ['abc', 'derfg6', 'afgdggdsg', 'frtrtr'];

// const res = arr.find((el) => {
//   return el.length === 6;
// });

// console.log(res); //derfg6

//

// let usersArr = [
//   { id: 1, name: 'Alice', email: 'alice@example.com' },
//   { id: 2, name: 'Bob', email: 'bob@example.com' },
//   { id: 3, name: 'Charlie', email: 'charlie@example.com' },
// ];

// function findUserById(userId) {
//   let user = usersArr.find((user) => user.id === userId);

//   if (user) {
//     return user;
//   } else {
//     return `Users with ${userId} not found`;
//   }
// }

// console.log(findUserById(2));//{ id: 2, name: 'Bob', email: 'bob@example.com' }
// console.log(findUserById(6));//Users with 6 not found

//findIndex(), findLastIndexOf()

// const arr = [1, 2, 3, 4, 5];

// const res = arr.findIndex((el) => {
//   return el % 2 == 0;
// });

// console.log(res); //1

///

// const arr2 = [1, 2, 3, 4, 2];

// const res2 = arr2.findLastIndex((el) => {
//   return el % 2 == 0;
// });

// console.log(res2); //4

//includes

// let arr = [1, 2, 4, 5];
// const res = arr.includes(4);
// const res2 = arr.includes(10);

// console.log(res);//true
// console.log(res2);//false

///rtest value

// let userRoles = ['user', 'editor'];
// let requiredRoles = ['admin', 'editor'];

// function hasAccess(userRoles, requiredRoles) {
//   return requiredRoles.some((role) => userRoles.includes(role));
// }

// console.log(hasAccess(userRoles, requiredRoles)); //true
// console.log(hasAccess(userRoles, ['admin'])); //false
// console.log(hasAccess(userRoles, ['guest', 'admin'])); //false

//filter

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);

// console.log(result); //[ 'exuberant', 'destruction', 'present' ]

//sort() - мутабельный

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// words.sort();

// console.log(words);//[ 'destruction', 'elite', 'exuberant', 'present', 'spray' ]

// const numbers = [-100, 10, 25, 30, 45, 44, 1, 2, 11];
// numbers.sort();

// console.log(numbers); // [
// //     -100,  1, 10, 11,
// //        2, 25, 30, 44,
// //       45
// //   ]

//arr.sort()

// const numbers = [-100, 10, 25, 30, 45, 44, 1, 2, 11];

// const compareFunction = (a, b) => {
//   // > 0 - a
//   // = 0 не меняем
//   // < 0 - b
//if(A > B) {
// return 1555} else {
//     -1567474
// }
// }
// };

// const result = numbers.sort((a, b) => a - b);// a - b по возрастанию
//const result = numbers.sort((a, b) => b - a); // b больше чем a значит б больше ф и значит что < 0 по убыванию

// console.log(result);

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'alex',
//     isStudent: true,
//   },
// ];

// const res = users.sort((a, b) => a.name.localeCompare(b.name));// A - Z в приоритете нижний регистр
// console.log(res);//[
//     { id: 3, name: 'alex', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 1, name: 'Bob', isStudent: true }
//   ]

// const res2 = users.sort((a, b) => b.name.localeCompare(a.name)); // Z - A верхний регистр а потом уже нижний регистр
// console.log(res2); //[
// //     { id: 1, name: 'Bob', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 3, name: 'alex', isStudent: true }
// // ]

//toSorted()

//Polyfills

const users1 = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: false,
  },
]; //["Bob", "Alex", "ann", "Donald"]

// const res = users1.map((user) => user.name);
// console.log(res);//[ 'Bob', 'Alex', 'Ann', 'Donald' ]

function newMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

const usersNameArr = newMap(users1, (user) => user.name);
console.log(usersNameArr); //[ 'Bob', 'Alex', 'Ann', 'Donald' ]
