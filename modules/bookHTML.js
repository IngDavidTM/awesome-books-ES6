import Book from './array.js';

const booksObject = new Book();
let newBook = new Array(0);
const bookList = document.getElementById('book-list');
const bookHTML = () => {
  if (JSON.parse(localStorage.getItem('mainArr')) != null) {
    newBook = JSON.parse(localStorage.getItem('mainArr'));
  }
  newBook.forEach((obj) => {
    const div = document.createElement('tr');
    div.classList = newBook.indexOf(obj);
    if (div.classList % 2 === 0) {
      div.classList.add('gray');
      div.classList.add('bookDiv');
    } else {
      div.classList.add('white');
      div.classList.add('bookDiv');
    }
    bookList.appendChild(div);
    const p = document.createElement('td');
    p.innerHTML = `"${obj.title}" by ${obj.author}`;
    div.appendChild(p);
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.classList.add('remove-book');
    button.setAttribute('id', obj.title);
    div.appendChild(button);
    const removeBtn = document.querySelectorAll('.remove-book');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.id === obj.title) {
          booksObject.removeBook(newBook.indexOf(obj));
          btn.parentElement.remove();
        }
      });
    });
  });
};
export default bookHTML;
export { booksObject };