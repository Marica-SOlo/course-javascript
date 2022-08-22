/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 

*/

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
   */

function map(array, fn) {
  const modif = [];

  for (let i = 0; i < array.length; i++) {
    modif[i] = fn(array[i], i, array);
  }

  return modif;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 
   */

function reduce(array, fn, initial) {
  const firstInitial = typeof initial !== 'undefined';
  let prev = firstInitial ? initial : array[0];
  for (let i = firstInitial ? 0 : 1; i < array.length; i++) {
    prev = fn(prev, array[i], i, array);
  }
  return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']

   */

function upperProps(obj) {
  const people = [];
  for (const name in obj) {
    people.push(name.toUpperCase());
  }
  return people;
}

/*
function upperProps(obj) {
var people = [];
for (var i = 0; i < obj.lenght; i++ ) {
   people.push(obj[i].name.toUpperCase);
}
return people
};
console.log(people);

/*

 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 

/*/

function createProxy(obj) {
  return new Proxy(obj, {
    set: function (pas, keys, vallue) {
      pas[keys] = vallue * vallue;
      return true;
    },
  });
}

export { forEach, map, reduce, upperProps, createProxy };
