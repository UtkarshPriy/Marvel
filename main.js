let name_input = document.querySelector('#name_input');
let searchBtn = document.querySelector('#search_btn');
let errordiv = document.querySelector('#errormsg');
console.log(errordiv);
let superhero_list = document.querySelector('#superhero_list');
let heroes = [];
let fav = [];


// function errormessage(message) {
//     let innerElement = `<h3>message</h3>`
//     errordiv.innerHTML = innerElement;
// }



function addHerotoDom(hero) {
    let li = document.createElement('li');
    li.innerHTML = `
    <img src="${hero.thumbnail.path+"."+hero.thumbnail.extension}" id = "poster"  >
    <h2 id="heroTitle"  data-id=${hero.id}>${hero.name}</h2>
    <button id="details" data-id="${hero.id}"> details </button>
    <button id="favBtn" data-id="${hero.id}" data-title="${hero.name}" >Add to Favourites</button>
    `
    superhero_list.append(li);
}

function renderList() {
    if (heroes.length === 0) {
        let errormsg = `Please input some valid hero name`;


    }
    // errordiv.innerHTML = '';
    superhero_list.innerHTML = '';

    if (heroes.length > 0) {
        for (i = 0; i < heroes.length; i++) {
            addHerotoDom(heroes[i]);
            // console.log(heroes);
        }
    }

}

async function search(text) {
    if (text.length != 0) {
        let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text}&apikey=c2595c6e10b8e75e6bd3b3c61b14547c&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`;
        let response = await fetch(url);
        let data1 = await response.json();
        heroes = data1.data.results;

        renderList();
    } else {
        renderList();
    }




}

function addToFav(hero_id, hero_title) {
    console.log(hero_id);
    for (i of fav) {
        if (hero_id === i) {
            errordiv.innerHTML = `${hero_title} already exists in favourites`;
            console.log('test1');
            setTimeout(() => {
                errordiv.innerHTML = '';
            }, 4000);
            return
        }

    }
    fav.push(hero_id);
    console.log(hero_id);
    errordiv.innerHTML = `${hero_title} added to favourites`;
    console.log(errordiv.innerHTML);
    setTimeout(() => {
        errordiv.innerHTML = '';
    }, 4000);


}

function detailed_info() {

}

function show_fav() {

}

function handleInput(data) {
    let text = data.value;
    search(text);

}

function handleKeyandClick(e) {
    if (e.target.id == 'name_input') {
        handleInput(e.target);

    }
    if (e.target.id == 'favBtn') {
        addToFav(e.target.dataset.id, e.target.dataset.title);

    }
    if (e.target.id === 'details') {
        let heroId = e.target.dataset.id;
        localStorage.setItem("heroId", JSON.stringify(heroId));
        window.open("hero_detail/detail.html");

    }
    if (e.target.id == 'favourite') {
        localStorage.setItem("favHeros", JSON.stringify(fav));
        window.open("fav_hero/fav.html"); 

    }


}

document.addEventListener('click', handleKeyandClick);
document.addEventListener('keyup', handleKeyandClick);
// favBtn.addEventListener('click',handleKeyandClick);