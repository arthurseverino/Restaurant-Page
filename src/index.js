import './style.css';
// import initialPageLoad from './initialPageLoad';

function loadPage() {
  let container = document.querySelector('#container')
  // container.classList.add('container');

  const heading = document.createElement('h1');
  heading.textContent = 'Best Restaurant in the Whole World';

  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let headingContainer = document.createElement('div');
  headingContainer.classList.add('heading-container');

  container.textContent = 'Query selected container';
  contentContainer.textContent = 'content-container';
  headingContainer.textContent = 'heading-container';


  container.appendChild(heading);
  container.appendChild(headingContainer);
  container.appendChild(contentContainer);

  //lets do button display logic in here
}

loadPage();
