// traversalDOM

function traversalDOM(element) {
  // если элементов больше нет, завершаем выполнение функции
  if (!element) return;

  // выводим в консоль текущий элемент
  console.log(element);

  // рекурсивно обходим дочерние элементы текущего элемента
  for (let i = 0; i < element.children.length; i++) {
    traversalDOM(element.children[i]);
  }
}

const body = document.querySelector('body');
console.log(traversalDOM(body));
