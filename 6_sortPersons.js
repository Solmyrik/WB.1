// sortPersons
// Сложность алгоритма O(n log n)

function sortPersons(arr) {
  return arr.sort((a, b) => {
    // сравниваем возраст
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }

    // если возраст равен, то сравниванием уже по имени
    if (a.name < b.name) {
      return 1;
    } else {
      return -1;
    }
  });
}

// const arr = [
//   { name: 'John', age: 35 },
//   { name: 'John', age: 25 },
//   { name: 'John', age: 45 },
//   { name: 'Alex', age: 25 },
//   { name: 'Alan', age: 25 },
//   { name: 'Alan', age: 45 },
// ];

// console.log(sortPersons(arr));
