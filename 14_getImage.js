//getImage

function getImage(url) {
  const res = new Promise((resolve, reject) => {
    // Выполненяем запрос fetch по указанному url
    fetch(url)
      .then((response) => {
        // В случае успешного ответа, возвращаем полученный промис
        if (response.ok) {
          return response;
        } else {
          // В случае ошибки отклоняем промис с выводом статуса ошибки
          reject(new Error('Произошла ошибка при загрузке изображения: ' + response.status));
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(new Error('Сетевая ошибка при загрузке изображения: ' + error.message));
      });
  });

  return res;
}

// const url = 'https://i.dummyjson.com/data/products/8/1.jpg';
// getImage(url)
//   .then((data) => {
//     console.log('промис разрешается с данными об изображении:', data);
//   })
//   .catch((error) => {
//     console.error('Ошибка при загрузке промиса:', error);
//   });
