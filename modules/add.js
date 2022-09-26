import { booksObject } from './bookHTML.js';

const title = document.getElementById('book-title');
const author = document.getElementById('book-author');

const addBook = () => booksObject.addInfo(title, author);

const formCheck = () => {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  if (title === '' || author === '') {
    const message = document.createElement('p');
    message.innerHTML = 'Please fill all the fields';
    const form = document.getElementById('book-form');
    form.appendChild(message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    addBook();
  }
};
export default formCheck;