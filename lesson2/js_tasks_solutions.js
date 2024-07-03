// push():
//
// Добавьте один или несколько элементов в конец массива
//
// Исходный массив:
//
// let fruits = ['apple', 'banana', 'orange'];
//
// const res = fruits.push("peach", "pear")
//
// console.log(res)
// console.log(fruits)

// pop():
//
// Удалите последний элемент в массиве и верните этот элемент
//
// Исходный массив:

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const res = users.pop()
// console.log(res)
// console.log(users)

// shift():
//
//
// Удалите первого юзера и верните его
//
// Исходный массив:

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// res = users.shift()
// console.log(res)
// console.log(users)

// unshift():
//
//
// Добавьте один и более элементов в начало массива
//
// Исходный массив:

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// res = users.unshift("Yana", "Daniel")
// console.log(users)
// console.log(res)

// reverse(), join(), split():
//
// Сделать reverse слова
//
// Исходная строка:

// const str = 'JavaScript is awesome';
//
// res = str.split(" ").reverse().join(" ")
// console.log(res)

// concat():
//
// Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив,
// содержащий все элементы из обоих массивов.
//     Ожидаемый результат:

// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]

// arr1 = [1, 2, 3]
// arr2 = [4, 5, 6]
//
// const mergeArrays = arr1.concat(arr2)
// console.log(mergeArrays)

// flat():
//
//
// Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины
//
// Ожидаемый результат:


// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]

// arr1 = [1, [2, 3], [[4], [5, 6]]]
//
// const flattenArray = arr1.flat(2)
// console.log(flattenArray)

// find():
//
// Напишите функцию JavaScript, которая находит первый элемент в массиве, удовлетворяющий заданному условию.
//
//     Пример:
//
// Входной массив: [10, 20, 30, 40, 50]
// Условие: Найти первый элемент больше 25
// Выходные данные: 30
//
// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
//     Условие: Найти первый элемент, начинающийся на "o".
//     Выходные данные: "апельсин"
//
// Необходимо написать функцию findFirstElement, которая принимает на вход массив и функцию условия и возвращает первый элемент в массиве, удовлетворяющий условию.
//
//     Ожидаемый результат:
//
//     let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"

// arr1 = [10, 20, 30, 40, 50]
// res = arr1.find(el => el > 25)
// console.log(res)
//
// arr2 = ["apple", "banana", "butter", "orange", "kiwi"]
// res1 = arr2.find(el => el[0] === "b")
// console.log((res1))

// startsWith() method of String values determines whether this string
// begins with the characters of a specified string, returning true or false as appropriate.

// const str1 = 'Saturday night plans';
//
// console.log(str1.startsWith('Sat'));
// // Expected output: true
//
// console.log(str1.startsWith('Sat', 3));
// // Expected output: false

// includes():
//
// Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.
//
//     Пример:
//
// Входной массив: [1, 2, 3, 4, 5]
// Элемент для проверки: 3
// Выход: true
//
// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
//     Элемент для проверки: "виноград"
// Выход: false
//
// Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true, если элемент присутствует в массиве, и false в противном случае.
//
//     Ожидаемый результат:
//
//
//     let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// arr1 = [1, 2, 3, 4, 5]
// function checkElement (arr, el) {
//     return !!arr.includes(el)
// }
//
// console.log(checkElement(arr1, 6))

// filter():
// Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает
// только те элементы, которые больше заданного значения.
//
//     Пример:
//
// Входной массив: [10, 20, 30, 40, 50]
// Значение для фильтрации: 25
// Выходной массив: [30, 40, 50]
//
// Входной массив: [5, 15, 25, 35, 45]
// Значение для фильтрации: 20
// Выходные данные: [25, 35, 45]
//
// Необходимо написать функцию filterGreaterThan, которая принимает на
// вход массив чисел и значение и возвращает новый массив, содержащий только элементы, превышающие указанное значение.
//
// array = [10, 20, 30, 40, 50]
//
// function filterGreaterThan(arr, number) {
//     return arr.filter(el => el > number)
// }
//
// res = filterGreaterThan(array, 10)
// console.log(res)

// sort():
//
// Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.
//
//     Ожидаемый результат:
//
//
//     let people = [
//         { name: 'John', age: 30 },
//         { name: 'Alice', age: 25 },
//         { name: 'Bob', age: 35 },
//     ];
//
// console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]
// let people = [
//     {name: 'John', age: 30},
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 35},
// ];
//
// function sortAlphabeticallyByProperty(arr, property) {
//     debugger
//     return arr.sort((a, b) => a[property].localeCompare(b[property]))
// }
//
// res = sortAlphabeticallyByProperty(people, "name")
// console.log(res)

// Напишите функцию JavaScript, которая сортирует массив чисел в порядке убывания

// let numbers = [5, 2, 8, 1, 4];
//
// function sortDescending(arr) {
//     return arr.sort((a, b) => b - a )
// }
//
// res = sortDescending(numbers)
// console.log(res)

// map():
//1)

// Отформатируйте data в массив объектов с такими вот св-ми
//
//     [
//     { value: 1, label: 'Option 1' },
//         { value: 2, label: 'Option 2' },
//         { value: 3, label: 'Option 3' }
//     ]
//
//
// Исходный массив:
//
// let data = [
//     {value: 1, name: 'Option 1'},
//     {value: 2, name: 'Option 2'},
//     {value: 3, name: 'Option 3'},
// ];
//
// let formattedData = data.map((el) => {
//     return {
//         value: el.value,
//         label: el.name
//     }
// })
//
// console.log(formattedData)

// 2)
// У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе существующих данных.
// Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9
//
// Исходный массив:
//
//     let products = [
//         { id: 1, name: 'Apple', price: 1.99 },
//         { id: 2, name: 'Banana', price: 0.99 },
//         { id: 3, name: 'Orange', price: 2.49 },
//     ];
//
//
//
// Ожидаемый результат:
//     console.log(productsWithDiscount); // [
// //   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
// //   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
// //   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
//
//  let productsWithDiscount = products.map((product) => {
//      return {
//          id: product.id,
//          name: product.name,
//          price: product.price,
//          discountedPrice: product.price * 0.9
//      }
//  })
//
// console.log(productsWithDiscount)

//refactored
// let productsWithDiscount = products.map((product) => {
//     return {
//         ...product,
//         discountedPrice: product.price * 0.9,
//     };
// });
//
// console.log(productsWithDiscount)






















