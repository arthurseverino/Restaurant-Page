export default function LoadMenu() {
  const contentContainer = document.querySelector('.content-container');
  contentContainer.textContent = '';
  contentContainer.textContent =
    'Menu page mmmmmmm, this is the menu page we have so many delicious menu items omg ';

  const img2 = document.createElement('img');
  img2.src = './images/lasagna.png';
  contentContainer.appendChild(img2);
  console.log('clicked menu button');
}
