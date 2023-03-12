import './style.css'

const cuteCatElement = document.querySelectorAll('#cuteCat');
const displayElement = document.querySelector('#display');
const catNameElement = document.querySelectorAll('.cat-name');

const catNames = ['Adorable Cat', 'Sleeping Cat'];
let count = 0;

catNameElement.forEach((element, index) => element.textContent = catNames[index]);
cuteCatElement.forEach( 
  element => element.addEventListener('click', () => {  display.textContent = `${++count}` })
);
