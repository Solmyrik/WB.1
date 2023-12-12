// callstackSize

function callstackSize() {
  try {
    // рекурсивно вызываем функцию
    return 1 + callstackSize();
  } catch (error) {
    // если достигнуто максимальное количество вызовов, возвращаем это число
    return 1;
  }
}

console.log(callstackSize());

// результаты:
// chrome: 10460
// edge: 10477
// yandex: 11418
