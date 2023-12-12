// validatePassword

const recommendationsOptions = {
  minLength: 'введите минимум 8 символов',
  lowercase: 'добавьте строчные буквы',
  uppercase: 'добавьте прописные буквы',
  number: 'добавьте цифры',
  symbols: 'добавьте специальные символы',
};

const scoreOptions = {
  0: 'очень слабый',
  1: 'слабый',
  2: 'средний',
  3: 'хороший',
  4: 'надежный',
};

function validatePassword(password) {
  let score = 0;
  const recommendations = [];

  // проверяем длину пароля
  if (password.length < 8) {
    recommendations.push(recommendationsOptions.minLength);
  } else {
    score += Math.floor(password.length / 8);
  }

  // проверяем строчные буквы
  if (/[a-z]/.test(password)) {
    score++;
  } else {
    recommendations.push(recommendationsOptions.lowercase);
  }

  // проверяем прописные буквы
  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    recommendations.push(recommendationsOptions.uppercase);
  }

  // проверяем цифры
  if (/\d/.test(password)) {
    score++;
  } else {
    recommendations.push(recommendationsOptions.number);
  }

  // проверяем специальные символы
  if (/[!@#$%^&*]/.test(password)) {
    score++;
  } else {
    recommendations.push(recommendationsOptions.symbols);
  }

  // оцениваем сложность, опираясь на количество баллов, которые набрал пароль
  let difficulty;
  if (score < 4) difficulty = scoreOptions[score];
  if (score >= 4) difficulty = scoreOptions[4];

  // возвращаем объект с результатом сложности и рекомендациями
  return {
    'Сложность пароля': `Пароль ${difficulty}`,
    рекомендации: recommendations.length ? recommendations : 'пароль и так отличный',
  };
}

// console.log(validatePassword('123456789012345ВFf6'));
