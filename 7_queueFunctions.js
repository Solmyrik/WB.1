// queueFunctions
// Сложность алгоритма O(n)

function queueFunctions(arr) {
  // проверяем, не пустой ли масси
  if (arr.length === 0) return;

  // проходимся циклом по всему массиву функций
  arr.forEach((func, index) => {
    // проверяем, является ли элемент функцией
    if (typeof func === 'function') {
      // запускаем функцию и выводим ее индекс
      func();
      console.log(`сейчас вывелась функция ${index + 1}`);
    }
  });
}

// const arrFunctions = [
//   function () {
//     console.log('функция №1');
//   },
//   function () {
//     console.log('функция №2');
//   },
//   function () {
//     console.log('функция №3');
//   },
//   function () {
//     console.log('функция №4');
//   },
// ];

// queueFunctions(arrFunctions);
