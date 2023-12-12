// form

const form = document.querySelector('.form');

// навышиваем обработчик событий на форму
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // получаем value инпутов
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  authFetch(username, password);
});

async function authFetch(username, password) {
  try {
    // делаем fetch запрос, передавая пароль и логин
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await res.json();

    // в случае успешного входа выводим алерт
    if (res.status === 200) {
      alert('вы успешно вошли');
    } else {
      alert('введите правильный логип и пароль');
    }
  } catch (error) {}
}
