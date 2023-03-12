import './style.css'

const catsElement = document.querySelector('.cats');
const displayElement = document.querySelector('#display');

function getCatTemplate({name, imageURL, clicks}){
  return `
    <div id="display" class="display-board">${clicks}</div>
    <h4 class="cat-name">${name}</h4>
    <div id="cuteCat" class="cat-container">
      <img class="cat-image" src="${imageURL}" alt="cute cat" />
    </div>
  ` 
}
const cats = [
  { name: 'Adorable Cat', imageURL: "https://media.distractify.com/brand-img/cZYoJwx_U/0x0/iStock-910314172-1553686882394.jpg", clicks: 0},
  { name: 'Sleeping Cat', imageURL: "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/afi_shutterstock_1808434111_article_why-do_cats_sleep_so_much.jpg", clicks: 0},
]

cats.forEach(cat => {
  const catElement = document.createElement('div');
  catElement.classList.add('cat');
  catElement.innerHTML = getCatTemplate(cat);
  catElement.addEventListener('click', event => {catElement.querySelector('.display-board').textContent = `${++cat.clicks}`});
  catsElement.appendChild(catElement);
});
