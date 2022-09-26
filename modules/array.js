class Book {
  constructor() {
    if (localStorage.getItem('mainArr') !== null) {
      this.newBook = JSON.parse(localStorage.getItem('mainArr'));
    } else {
      this.newBook = new Array(0);
    }
  }

  addInfo = (title, author) => {
    this.newBook.push({
      title: title.value,
      author: author.value,
    });
    localStorage.setItem('mainArr', JSON.stringify(this.newBook));
  }

  removeBook = (index) => {
    this.newBook.splice(index, 1);
    localStorage.setItem('mainArr', JSON.stringify(this.newBook));
    window.location.reload();
  }
}
export default Book;