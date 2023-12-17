// 19-20 задача

const token = '48c1c03148c1c03148c1c031264bd75bf5448c148c1c0312db9e1fb5fda75b4949b2841';
const id = '176864224';
let offset = 0;
let cache = [];
let isFetching = false;

// получаем DOM элементы
const widget = document.querySelector('.widget');
const widjetItems = document.querySelector('.widget__items');

// получаем из localStorage максимальный объем нашего localStorage
// либо же подставляем 0, если это первый чистый запуск страницы
let maxLocal = localStorage.getItem('maxLocal') ? localStorage.getItem('maxLocal') : 0;

// функция для подсчета максимального количества килобайт localStorage данного браузера
function calculateLocalStorageSize() {
  // количество килобайт
  let kb = 0;

  // создаем строку, которая будет занимать 1 килобайт
  const testString = Array(1024).join('a');

  try {
    // добавляем данные в локальное хранилище, пока не произойдет исключение
    // вплоть до 10240 килобайт

    while (kb < 10240) {
      localStorage.setItem('test' + kb, testString);
      kb++;
    }
  } catch (e) {
    // ловим исключение, когда достигнуто максимальное доступное пространство
    // и возвращаем количество килобайт, которые успели сохранить
    return kb;
  }
}

// функция для очиститки localStorage от тестовых элементов
function removeItemsLocalStorage(max) {
  for (let i = 0; i < max; i++) {
    localStorage.removeItem(`test${i}`);
  }
}

// если это первый чистый запуск, то запускаются функции для подсчета размера localStorage
// максимальный размер запоминается в localStorage
if (maxLocal === 0) {
  maxLocal = calculateLocalStorageSize();
  removeItemsLocalStorage(maxLocal);
  localStorage.setItem('maxLocal', maxLocal);
}

// следим за тем, когда скролл доходит до последнего доступного элемента
widget.addEventListener('scroll', (e) => {
  if (widget.scrollTop + widget.clientHeight + 20 > widget.scrollHeight && isFetching === false) {
    console.log('click');
    offset = Number(offset) + 5;
    getApi();
  }
});

// получаем данные по api в зависимости от текующих параметров
function getApi() {
  isFetching = true;
  const script = document.createElement('SCRIPT');
  script.src = `https://api.vk.com/method/wall.get?owner_id=-${id}&count=${5}&offset=${offset}&access_token=${token}&v=5.131&callback=${
    handleResponse.name
  }`;
  document.head.append(script);
}

// обрабатываем полученные данные
function handleResponse(result) {
  updateItems(result.response.items);

  cache = cache.concat(result.response.items);

  // если количество элементов больше 50, то удаляем первые 5
  // число абсолютно условное, чтобы показать пример работы в данном случае
  if (cache.length > 50) {
    cache = cache.splice(5);
  }

  calculateSizeItems(JSON.stringify(cache));

  // обновляем localStorage
  localStorage.setItem('items', JSON.stringify(cache));
  localStorage.setItem('offset', offset);
}

// обновляем ленту постов
function updateItems(items) {
  isFetching = false;
  items.forEach((item) => {
    const imageURL = item.attachments[0]?.photo?.sizes[1].url;

    const divElement = document.createElement('div');
    const textElement = document.createElement('p');
    const imgElemtent = document.createElement('img');

    imgElemtent.src = imageURL;
    textElement.textContent = item.text;

    divElement.appendChild(imgElemtent);
    divElement.appendChild(textElement);

    widjetItems.appendChild(divElement);
  });
}

// функция для получения элементов в зависимости от того, есть ли что-то в localStorage
function getItems() {
  const cacheOffset = localStorage.getItem('offset');

  if (cacheOffset) {
    const cacheItems = localStorage.getItem('items');
    calculateSizeItems(cacheItems);
    cache = JSON.parse(localStorage.getItem('items'));
    offset = localStorage.getItem('offset');
    updateItems(JSON.parse(cacheItems));
  } else {
    getApi();
  }
}

getItems();

// функция, которая подсчитывает, сколько места сейчас занимают элементы в localStorage
function calculateSizeItems(items) {
  const currentSize = Math.floor(items.length / 1024);
  console.log(`${currentSize} / ${maxLocal}`);

  // если количество занимаемой памяти близко к максимуму, то удаляем первые 5 элементов
  if (Number(currentSize) + 30 >= Number(maxLocal)) {
    cache = cache.splice(5);
    localStorage.setItem('items', JSON.stringify(cache));
  }
}
