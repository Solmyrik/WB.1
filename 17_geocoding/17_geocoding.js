// получение DOM элементов
const input = document.querySelector('#input');
const select = document.querySelector('#select');

// вешаем обработчик на Input
input.addEventListener('input', (e) => {
  console.log(e.target.value);
  fetchGeo(e.target.value);
});

// вешаем обработчик на select
select.addEventListener('change', (e) => {
  input.value = e.target.value;
});

// функция для запроса данных
async function fetchGeo(value) {
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=1d78f38b-7c7e-4d74-8531-c414704d6626&geocode=${value}&format=json`;

  if (value.length) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      updateSelect(data.response.GeoObjectCollection.featureMember);
    } catch (error) {
      console.error('Произошла ошибка', error);
    }
  }
}

// функция для обновления select
function updateSelect(arr) {
  if (arr.length === 0) return;

  // очищаем содержимое select, кроме первого элемента
  const optionsToRemove = Array.from(select.options).slice(1);
  optionsToRemove.forEach((option) => {
    select.remove(option.index);
  });

  // циклом проходимся по массиву из полученных данных
  // создаем option и вставляем туда название региона
  for (let i = 0; i < arr.length; i++) {
    const option = document.createElement('option');
    option.value = `${arr[i].GeoObject.name} - ${arr[i].GeoObject.description}`;
    option.textContent = `${arr[i].GeoObject.name} - ${arr[i].GeoObject.description}`;
    select.append(option);
  }
}

// функция debounce, которая принимает функцию в качестве аргумента
const debounce = (fn) => {
  let time;
  return function () {
    const fnCall = () => {
      // вызызваем переданную функцию с аргументами
      fn.apply(this, arguments);
    };

    // очищаем предыдущий setTimeout
    clearTimeout(time);

    // устанавливаем новый setTimeout через 500 миллисекунд
    time = setTimeout(fnCall, 500);
  };
};

fetchGeo = debounce(fetchGeo);
