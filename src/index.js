import LoadHome from './LoadHome';
import LoadMenu from './LoadMenu';
import './style.css';

// how to separate DOM stuff from application logic

/*
my issue with event listeners clicking by itself was I was calling LoadHome() which calls the function itself 
you need to pass it a reference to a function 
*/

const container = document.querySelector('#container');

const heading = document.createElement('h1');
heading.textContent = 'Best Restaurant in the Whole World';

const headingContainer = document.createElement('div');
headingContainer.classList.add('heading-container');

const contentContainer = document.createElement('div');
contentContainer.classList.add('content-container');

container.appendChild(heading);
container.appendChild(headingContainer);
container.appendChild(contentContainer);

const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

homeButton.textContent = 'Home';
menuButton.textContent = 'Menu';
contactButton.textContent = 'Contact';

headingContainer.appendChild(homeButton);
headingContainer.appendChild(menuButton);
headingContainer.appendChild(contactButton);

function loadPage() {
  LoadHome();
  homeButton.addEventListener('click', LoadHome);
  menuButton.addEventListener('click', LoadMenu);
}

loadPage();
