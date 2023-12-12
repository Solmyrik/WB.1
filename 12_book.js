// book

const book = {
  // задаем необходимые свойства
  title: 'The Lord of the Rings',
  author: 'Tolkien',
  year: 1954,

  // функции для получения значения свойств
  // и для изменения значения свойств
  getTitle() {
    return this.title;
  },

  setTitle(title) {
    this.title = title;
  },

  getAuthor() {
    return this.author;
  },

  setAuthor(author) {
    this.author = author;
  },

  getYear() {
    return this.year;
  },

  setYear(year) {
    this.year = year;
  },
};

// console.log(book.getTitle());
// book.setYear(1955);
// console.log(book.getYear());
