// createElement
// Сложность алгоритма O(1)

function createElement(tag, styles, parrent) {
  // создаем элемент с нужным тегом
  const element = document.createElement(tag);

  // добавляем элементу стили
  element.style[styles.name] = styles.value;

  // добавляем созданный элемент в родительский элемент
  parrent.appendChild(element);
}

const body = document.querySelector('body');
console.log(body);
createElement('DIV', { name: 'color', value: '#303030' }, body);
