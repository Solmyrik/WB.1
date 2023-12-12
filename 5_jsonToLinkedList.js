// jsonToLinkedList
// в данном варианте мы записываем в val списка "ключ-значение"
// Сложность алгоритма O(n)

// класс для создания структуры односвязного списка
class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function jsonToLinkedList(json) {
  // парсим json в объект
  const obj = JSON.parse(json);

  // преобразуем объект в массив объектов
  let data = Object.keys(obj).map((key) => ({ key: key, value: obj[key] }));

  // проверяем, есть ли у нас данные
  if (!data.length) return;

  // создаем голову нашего списка
  const head = new LinkedList(data[0]);

  //ставим указатель на головной элемент списка
  let current = head;

  for (let i = 1; i < data.length; i++) {
    // создаем следующий узел списка
    current.next = new LinkedList(data[i]);

    // переходим на следующий узел
    current = current.next;
  }

  // возвращаем LinkedList
  return head;
}

// let obj = {
//   name: 'John',
//   age: 30,
//   height: 90,
// };

// let json = JSON.stringify(obj);
// let linkedList = jsonToLinkedList(json);

// console.log(linkedList);
