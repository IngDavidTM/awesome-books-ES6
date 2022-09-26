import bookHTML from './modules/bookHTML.js';
import formCheck from './modules/add.js';
import date from './modules/dateTime.js';

import { listF, formF, contactF } from './modules/pages.js';

document.getElementById('date').innerHTML = date;

document.getElementById('add-book').addEventListener('click', formCheck);

window.onload = bookHTML();

const showListButton = document.getElementById('show-list');
const addNewButton = document.getElementById('add-new');
const showContactButton = document.getElementById('show-contact');

addNewButton.addEventListener('click', listF);
showListButton.addEventListener('click', formF);
showContactButton.addEventListener('click', contactF);
