/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
  {
    name:'Cindy',
    type:'Dog',
    breed:'Aussie',
    age:'3',
    photo:'img/aussie.jpg',
  },
   {
    name:'Kyle',
    type:'Dog',
    breed:'Dachshund',
    age:'2',
    photo:'img/dachshund.jpg',
  },
   {
    name:'Conway',
    type:'Dog',
    breed:'Golden',
    age:'4',
    photo:'img/golden.jpg',
  },
   {
    name:'Benny',
    type:'Cat',
    breed:'Persian',
    age:'4',
    photo:'img/persian.jpg',
  },
   {
    name:'Nas',
    type:'Dog',
    breed:'Pug',
    age:'4',
    photo:'img/pug.jpg',
  },
   {
    name:'Jay',
    type:'Cat',
    breed:'Tabby',
    age:'3',
    photo:'img/tabby.jpg',
  },
];
  
  function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    let name = pets[i].name;
    let type = pets[i].type;
    let breed = pets[i].breed;
    let age = pets[i].age;
    let photo = pets[i].photo;
       items += `<h2>${name}</h2>
                 <h3>${type} | ${breed}</h3>
                 <p>Age: ${age}</p>
                 <img src= ${photo} alt= ${breed}>`;
  }
  return items;
}

let html = `${ createListItems(pets)}`;

document.querySelector('main').innerHTML = html;