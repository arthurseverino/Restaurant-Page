export default function DOMStuff() {
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
}
