// Palindrome v1
// Сложность алгоритма O(n)
function palindrome(str) {
  // удаляем пробелы из строки с помощью регулярного выражения
  const cleanStr = str.replace(/\s/g, '').toLowerCase();

  // создаем переменную с перевернутой строкой
  const reverseStr = cleanStr.split('').reverse().join('');

  // сраниваем изначальную строку с перевернутой
  return cleanStr === reverseStr;
}

// Palindrome v2
// Сложность алгоритма O(n)
function palindrome2(str) {
  // удаляем пробелы из строки с помощью регулярного выражения
  const cleanStr = str.replace(/\s/g, '').toLowerCase();

  let reverseStr = '';

  // проходимся циклом по строке, начиная с конца
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i];
  }

  // сраниваем изначальную строку с перевернутой
  return cleanStr === reverseStr;
}

// console.log(palindrome('аргентина манит негра'));
// console.log(palindrome2('аргентина манит негра'));
