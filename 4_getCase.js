// getCase v1
// Сложность алгоритма O(1)
export function getCase(number, forms) {
  // получаем две последние цифры числа
  const lastTwoNum = number % 100;

  // получаем последние цифру числа
  const lastNum = number % 10;

  // если последняя цифра числа от 2 до 4, то возвращаем вторую форму
  if (lastNum >= 2 && lastNum <= 4) {
    return forms[1];
  }

  // если последняя цифра равна 1, но последниее две цифры не равны 11
  // то возвращаем первую форму
  if (lastNum === 1 && lastTwoNum !== 11) {
    return forms[0];
  }

  // в остальных случаях возвращаем третью форму
  return forms[2];
}

// getCase v2
// Сложность алгоритма O(1)
export function getCase2(number, forms) {
  // получаем две последние цифры числа
  const lastTwoNum = number % 100;
  const lastNum = number % 10;

  // используем оператор switch для выбора соответствующей формы слова
  switch (true) {
    case lastNum >= 2 && lastNum <= 4:
      return forms[1];
    case lastNum === 1 && lastTwoNum !== 11:
      return forms[0];
    default:
      return forms[2];
  }
}
