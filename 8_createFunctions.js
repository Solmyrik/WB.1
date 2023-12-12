// createFunctions
// Сложность алгоритма O(n)

function createFunctions(arr) {
  // создаем массив в лексическом окружении основной функции;
  const result = [];

  return function () {
    // проверяем на наличие элементов в массиве
    if (!arr.length) return;

    arr.forEach((func) => {
      // проверяем, является ли элемент функцией
      if (typeof func === 'function') {
        // запускаем функцию и добавляем результат ее вызова в массив
        result.push(func());
      }
    });

    // возвращаем результат
    return result;
  };
}

// const arrFunctions = [
//   function () {
//     return 1;
//   },
//   function () {
//     return 2;
//   },
//   function () {
//     return 3;
//   },
//   function () {
//     return 4;
//   },
// ];

// const create = createFunctions(arrFunctions);
// console.log(create());
