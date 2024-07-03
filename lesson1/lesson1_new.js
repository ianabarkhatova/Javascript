//примитивные типы данных
//string, boolean, number, null, undefined, symbol, bigInt

//ссылочный тип данных
//object, array, functions, new map, new set, class

//Ссылочных тип данных:

//более сложная структурка, имеют св-ва и методы, ссылочный тип данных

// const a = {
//   key: 'test value',
// }; // #1234

// const b = a; //#1234

// console.log('a obj: ', a);
// console.log('b: ', b);

// console.log('isEqual: ', a == b);//true #1234 == #1234

// const newObj = {
//   age: 25,
// }; //#555

// const newObj2 = newObj; //#555

// newObj2.age = 35;

// console.log('new object frirst: ', newObj); //new object frirst:  { age: 35 }
// console.log('newOvj2', newObj2);

//мутабельность
// const a = { test: 'test value' };
// const b = a;
// b.test = '2';

// console.log(a);//{ test: '2' }

//иммутабельность

//////

// const user = {
//   id: '12345',
//   name: 'Bob',
//   isMarried: true,
// };

// const user2 = {
//   id: user.id,
//   name: user.name,
//   isMarried: user.isMarried,
// };

///////

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
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: true,
//   },
// ]; //#1111

//мутабельно удаляем последнего пользователя
// const result = users.pop();

// console.log('result: ', users);//мутальныц метод массива

//иммутабельно удаляем последнего пользователя

// const result = [...users]; //#455
// result.pop();

// console.log('isEqual: ', users === result); //false #1111 === #455

// console.log('result: ', result);

////////////
// const user = {
//   id: 1,
//   name: 'test',
//   isMarried: true,
// }; //#456

// const newUser = { ...user }; //#898

// console.log('newUser: ', newUser); //newUser:  { id: 1, name: 'test', isMarried: true }
// console.log('IsEqual: ', user === newUser); //IsEqual:  false

/////

const superUser = {
  id: 10,
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  address: {
    street: 'Kattie Turnpike',
    suite: 'Suite 198',
    city: 'Lebsackbury',
    zipcode: '31428-2261',
    geo: {
      lat: '-38.2386',
      lng: '57.2232',
    },
  },
  phone: '024-648-3804',
  website: 'ambrose.net',
  company: {
    name: 'Hoeger LLC',
    catchPhrase: 'Centralized empowering task-force',
    bs: 'target end-to-end models',
  },
};

// const result = { ...superUser };
// result.address.city = 'London';

// console.log('Super user: ', superUser.address.city);//Super user:  London
// console.log('result object: ', result.address.city);//result object:  London

// const newSuperUser2 = { ...superUser, address: { ...superUser.address, city: 'London' } };
// console.log('Super user: ', superUser.address.city); //Super user:  Lebsackbury
// console.log('New super user: ', newSuperUser2.address.city); //New super user:  London

// const result = {
//   ...superUser,
//   address: { ...superUser.address, city: 'London', geo: { ...superUser.address.geo, lat: 'test value' } },
// };
// console.log('super user: ', superUser.address.geo.lat); //super user:  -38.2386
// console.log('result new: ', result.address.geo.lat); //result new:  test value

//structuredClone()

// const newObj = structuredClone(superUser);
// newObj.address.geo.lat = 'new structure value';

// console.log('super user: ', superUser.address.geo.lat); //super user:  -38.2386
// console.log('new obj user: ', newObj.address.geo.lat); //new obj user:  new structure value

///aaa
// const a = {
//   test: 'value',
// };

// const b = a;
// b.test = 'new';

// console.log(a);

///example 1
// const a = [1, 2, 3];

// const b = [4, 5, 6];

// const result = [...a, ...b];

// console.log(result);//[ 1, 2, 3, 4, 5, 6 ]

//example 2
// const test = [1, 2, 3];
// const newItem = 'skirt';

// const result = [...test, newItem];
// console.log('result: ', result);//result:  [ 1, 2, 3, 'skirt' ]

// const str = 'I am a string';
// const str2 = { ...str };
// const str3 = [...str];
// console.log('str2', str2);
// console.log('str3', str3);

//деструктуризация
// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const firstName = employee.firstName; // "Ivan"
// const lastName = employee.lastName; // "Ivanov"

//1 example

// const { firstName, middleName } = employee;

// console.log('firstName: ', firstName); //firstName:  Ivan
// console.log('middleName: ', middleName);//middleName:  Ivanovich

//2 example

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const middleName = 'This is middleName!';

// const { lastName, middleName: NewVariable } = employee;

// console.log('middke nale: ', middleName); //middke nale:  This is middleName!
// console.log('newVariable: ', NewVariable); //newVariable:  Ivanovich

//3 example

// const user = {
//   id: 1234,
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   role: 'admin',
// };

// //если по кредам я админ то приходит св-во role: "admin", если не админ то поля нет

// const { middleName, role = 'simple user' } = user;

// console.log(middleName, role); //Ivanovich simple user
// console.log(role); //admin

//4 example

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
//   permission: {
//     canEdit: true,
//     canDelete: false,
//     role: 'user',
//   },
// };

// const {
//   permission: { canDelete, canEdit },
// } = employee;//происходит два этапа 1) что ты по ключу забираешь значение 2) присваешь это значение в перменную

// console.log('CanDelete: ', canDelete); //CanDelete:  false аналог emplyee.permession.canDelete
// console.log('CanEdit: ', canEdit); //CanEdit:  true

//Array

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const redColor = colors[0];
// console.log('redColor: ', redColor); //redColor:  red

//Exanple 1

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const [redColor, testValue1, testValue2] = colors;

// console.log('redColor: ', redColor); //redColor:  red
// console.log('result: ', testValue1, testValue2);//result:  blue green

//Example 2

// const colors = ['red', { 0: 'Color1', 1: 'color2' }, 'green', 'white', 'black'];

// const [, testValue] = colors;

// console.log('testValue', testValue);

//Example 3
// const colors = ['red', 'blue', 'green', 'white', 'black'];

// //rest operator - ...
// const [, testValue2, ...rest] = colors;//rest:  [ 'green', 'white', 'black' ]

// console.log('rest: ', rest);

// Example 4

// const colors = ['red', ['test1', 'test2'], 'green', 'white', 'black'];
//               // 0    ,  1
// const [value1, [test1, test2]] = colors;
// 0      ,      1

// console.log('test1: ', test1); //test1:  test1
// console.log('test2: ', test2); //test2:  test2
