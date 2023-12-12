// sortTable

let items = [];
let currentPage = 1;
let sorted = null;

const body = document.querySelector('.body');

// функция для получения данных для таблицы
async function getItems() {
  try {
    const response = await fetch(
      'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true',
    );
    const data = await response.json();

    items = data;
    updateItems();
  } catch (error) {
    console.error(error);
  }
}

// функция для обновления таблицы
function updateItems() {
  const start = (currentPage - 1) * 50;
  const currentItems = items.slice(start, start + 50);

  console.log(start);

  body.innerHTML = '';

  currentItems.forEach((item) => {
    body.innerHTML += `
     <tr>
         <td>${item.fname}</td>
         <td>${item.lname}</td>
         <td>${item.tel}</td>
         <td>${item.address}</td>
         <td>${item.city}</td>
         <td>${item.state}</td>
         <td>${item.zip}</td>
     </tr>
   `;
  });
}

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const pageCount = document.querySelector('.page');

// переход на следующую страницу
nextButton.addEventListener('click', (e) => {
  if (items.length / 50 > currentPage) {
    currentPage++;
    updateItems();
    pageCount.textContent = currentPage;
  }
});

// переход на предыдущую страницу
prevButton.addEventListener('click', (e) => {
  if (currentPage > 1) {
    currentPage--;
    updateItems();
    pageCount.textContent = currentPage;
  }
});

// ищем клик на заголовки
document.addEventListener('click', function (event) {
  if ((event.target.tagName = 'TH')) {
    sortingTable(event.target.textContent);
  }
});

// сортировка таблицы
function sortingTable(value) {
  // определяем и меняем текущее состояние сортировки
  if (sorted) {
    if (sorted[0] === '-' && sorted.includes(value)) {
      sorted = `+${value}`;
    } else if (sorted[0] === '+' && sorted.includes(value)) {
      sorted = `-${value}`;
    } else if (!sorted.includes(value)) {
      sorted = `+${value}`;
    }
  } else {
    sorted = `+${value}`;
  }

  // если в ключе состояния плюс, то сортируем по убыванию
  if (sorted[0] === '+') {
    items.sort((a, b) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      return 0;
    });
  }
  // если в ключе состояния минус, то сортируем по возрастанию
  else {
    console.log('click');
    items.sort((a, b) => {
      if (a[value] > b[value]) {
        return -1;
      }
      if (a[value] < b[value]) {
        return 1;
      }
      return 0;
    });
  }

  updateItems();
}

getItems();
