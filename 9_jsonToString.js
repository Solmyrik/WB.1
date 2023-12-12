// jsonToString
// Сложность алгоритма O(n)

function jsonToString(json) {
  // проверяем, является ли значение объектом и не является ли null
  if (typeof json === 'object' && json !== null) {
    // если значение является массивом
    if (Array.isArray(json)) {
      // преобразуем каждый элемент массива в строку с помощью рекурсивного вызова функции
      const arr = json.map((item) => jsonToString(item));
      return `[${arr.join(',')}]`;
    }

    // если значение является объектом
    const objectEntries = [];
    for (let key in json) {
      if (json.hasOwnProperty(key)) {
        objectEntries.push(`"${key}":${jsonToString(json[key])}`);
      }
    }
    return `{${objectEntries.join(',')}}`;
  }
  // если значение является строкой, оборачиваем её в кавычки и возвращаем
  else if (typeof json === 'string') {
    return `"${json}"`;
  }
  // если наш объект закончился, то возвращаем все данные в виде строки
  else {
    return String(json);
  }
}

let obj = {
  name: 'John',
  age: 35,
  height: [342, 324, 432, 432],
  money: {
    all: 10000,
  },
};

console.log(jsonToString(obj));
