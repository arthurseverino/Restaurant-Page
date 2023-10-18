export default function LoadHome() {
  const contentContainer = document.querySelector('.content-container');

  contentContainer.textContent = '';
  contentContainer.textContent =
    'mm this food is sooo good. Welcome to our mmm restaurant. Our food is mmm so good';

  // Add the image to our existing div.
  const img = document.createElement('img');
  img.src = './images/restaurant.png';
  img.alt = 'img of restaurant';
  contentContainer.appendChild(img);
  console.log('clicked home button');
}
