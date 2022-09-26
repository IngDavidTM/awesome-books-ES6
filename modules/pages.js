const showListButton = document.getElementById('show-list');
const addNewButton = document.getElementById('add-new');
const showContactButton = document.getElementById('show-contact');

const sectionList = document.getElementById('list');
const sectionForm = document.getElementById('form');
const sectionContact = document.getElementById('contact');
const listF = () => {
  sectionForm.style.display = 'flex';
  addNewButton.style.color = 'blue';
  showListButton.style.color = 'black';
  showContactButton.style.color = 'black';
  sectionList.style.display = 'none';
  sectionContact.style.display = 'none';
};
const formF = () => {
  sectionList.style.display = 'flex';
  showListButton.style.color = 'blue';
  showContactButton.style.color = 'black';
  addNewButton.style.color = 'black';
  sectionForm.style.display = 'none';
  sectionContact.style.display = 'none';
};
const contactF = () => {
  sectionContact.style.display = 'flex';
  showContactButton.style.color = 'blue';
  sectionList.style.display = 'none';
  sectionForm.style.display = 'none';
  showListButton.style.color = 'black';
  addNewButton.style.color = 'black';
};
export { listF, formF, contactF };