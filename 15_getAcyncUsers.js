// getAcyncUsers
// Сложность алгоритма O(n)

async function getAcyncUsers(urls) {
  const result = [];

  // циклом проходимся по всем url
  for (let i = 0; i < urls.length; i++) {
    // отправляем асинхронный запрос для получения данных по указанному url
    const data = await fetch(urls[i]);

    // ожидаем преобразования ответа в json
    const res = await data.json();

    // пушим имя пользователя в результирующий массив
    result.push(res.firstName);
  }

  return result;
}

// const urls = [
//   'https://dummyjson.com/users/1',
//   'https://dummyjson.com/users/2',
//   'https://dummyjson.com/users/3',
// ];

// getAcyncUsers(urls);
