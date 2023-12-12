// stringToJson

function stringToJson(jsonString) {
  let currentIndex = 0;

  // определяем тип данных и запускаем нужную функцию
  function parseItem() {
    skipSpace();
    switch (jsonString[currentIndex]) {
      case '"':
        return parseStringItem();
      case '{':
        return parseObjectItem();
      case '[':
        return parseArrayItem();
      default:
        if (/^-?\d/.test(jsonString[currentIndex])) {
          return parseNumberItem();
        } else {
          let word = jsonString.substr(currentIndex, 4);
          switch (word) {
            case 'true':
            case 'fals':
              return parseBooleanItem();
            case 'null':
              return parseNullItem();
            default:
              break;
          }
        }
    }
  }

  // парсим строку
  function parseStringItem() {
    let result = '';
    currentIndex++;
    while (jsonString[currentIndex] !== '"') {
      result += jsonString[currentIndex];
      currentIndex++;
    }
    currentIndex++;
    return result;
  }

  // парсим число
  function parseNumberItem() {
    const start = currentIndex;
    while (/^-?\d/.test(jsonString[currentIndex])) currentIndex++;
    return Number(jsonString.slice(start, currentIndex));
  }

  // парсим булевое значение
  function parseBooleanItem() {
    if (jsonString.substr(currentIndex, 4) === 'true') {
      currentIndex += 4;
      return true;
    } else {
      currentIndex += 5;
      return false;
    }
  }

  // парсим null
  function parseNullItem() {
    currentIndex += 4;
    return null;
  }

  // парсим объект
  function parseObjectItem() {
    let result = {};
    currentIndex++;
    skipSpace();
    while (jsonString[currentIndex] !== '}') {
      const key = parseStringItem();
      skipSpace();
      if (jsonString[currentIndex] !== ':') throw new Error(`Expected ':' at ${currentIndex}`);
      currentIndex++;
      const value = parseItem();
      result[key] = value;
      skipSpace();
      if (jsonString[currentIndex] === ',') {
        currentIndex++;
        skipSpace();
      }
    }
    currentIndex++;
    return result;
  }

  // парсим массив
  function parseArrayItem() {
    let result = [];
    currentIndex++;
    skipSpace();
    while (jsonString[currentIndex] !== ']') {
      const value = parseItem();
      result.push(value);
      skipSpace();
      if (jsonString[currentIndex] === ',') {
        currentIndex++;
        skipSpace();
      }
    }
    currentIndex++;
    return result;
  }

  // пропускаем пробелы, переносы
  function skipSpace() {
    while (
      jsonString[currentIndex] === ' ' ||
      jsonString[currentIndex] === '\t' ||
      jsonString[currentIndex] === '\n' ||
      jsonString[currentIndex] === '\r'
    ) {
      currentIndex++;
    }
  }

  return parseItem();
}

console.log(
  stringToJson('{"name":"John","age":35,"height":[342,324,432,432],"money":{"all":10000}}'),
);
