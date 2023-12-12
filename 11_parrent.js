// parrent
// Сложность алгоритма O(n)

function parrent() {
  // создаем переменную в внешней функции
  const text = 'lorem lorem lorem';
  return () => {
    // внутреняя функция будет брать значение переменной из лексического окружения родительской функции
    return text;
  };
}

const textFunc = parrent();

// console.log(textFunc());
