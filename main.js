import './style.css'

const cuteCat = document.querySelector('#cuteCat');
const display = document.querySelector('#display');

let count = 0;

cuteCat.addEventListener('click', () => {
  display.textContent = `${++count}`;
});
