// maxLocalStorage

function calculateLocalStorageSizeInKB() {
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

console.log(calculateLocalStorageSizeInKB());
