import './style.css'

const catsElement = document.querySelector('.cats');
const sideBar = document.querySelector('.sidebar');

function getCatTemplate({name, imageURL, clicks}){
  return `
    <div id="display" class="display-board">${clicks}</div>
    <h4 class="cat-name">${name}</h4>
    <div id="cuteCat" class="cat-container">
      <img class="cat-image" src="${imageURL}" alt="${name}" />
    </div>
  ` 
}

const cats = [
  { name: 'Majestic Cat', imageURL: "https://media.distractify.com/brand-img/cZYoJwx_U/0x0/iStock-910314172-1553686882394.jpg", clicks: 0},
  { name: 'Sleeping Cat', imageURL: "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/afi_shutterstock_1808434111_article_why-do_cats_sleep_so_much.jpg", clicks: 0},
  { name: 'Adorable Cat', imageURL: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg", clicks: 0},
  { name: 'Angry Cat', imageURL: "https://www.vetstreet.com/wp-content/uploads/2022/09/animal-cat-feline-mammal-fauna-yawn-1267584-pxhere.com-1.jpg", clicks: 0},
  { name: 'Zen Cat', imageURL: "https://www.vetstreet.com/wp-content/uploads/2022/09/black-and-white-photography-animal-pet-portrait-cat-512255-pxhere.com-1.jpg", clicks: 0},
]

let selSidebarLink;

for(let i = 0; i < cats.length; i++){
  const sidebarLink = document.createElement('div');
  sidebarLink.textContent = cats[i].name;
  sidebarLink.classList.add('sidebar-link');
    
  if(i === 0){
    sidebarLink.classList.add('sidebar-link-active');
    selSidebarLink = sidebarLink;
  }
  
  sidebarLink.addEventListener('click', () => {
    selSidebarLink.classList.remove('sidebar-link-active');
    sidebarLink.classList.add('sidebar-link-active');
    selSidebarLink = sidebarLink;
    renderSelectedCat(i);
  });
  
  sideBar.appendChild(sidebarLink);
}

function renderSelectedCat(index){
  if (catsElement.firstChild) catsElement.removeChild(catsElement.firstChild);

  const catElement = document.createElement('div');
  catElement.classList.add('cat');
  catElement.innerHTML = getCatTemplate(cats[index]);
  catElement.addEventListener('click', event => {catElement.querySelector('.display-board').textContent = `${++cats[index].clicks}`});
  catsElement.appendChild(catElement);
}

renderSelectedCat(0);
