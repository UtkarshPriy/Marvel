
let name_input = document.querySelector('#name_input');
let searchBtn = document.querySelector('#search_btn');
// let superhero_list = document.querySelector('#superhero_list');
// let superhero_detail = document.querySelector("#superhero_detail");
// let fav_detail = document.querySelector("#fav_detail");
let heroes =[];

const publicKey = 'ac8d9167414964ceca0043193cc9161b';
const privateKey = '1db1bb50d8bb4dab5cb37d60468465a6caeea05f';
// let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text}&apikey=ac8d9167414964ceca0043193cc9161b&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`;
// https://gateway.marvel.com:443/v1/public/characters?ts=<time-stamp>&apikey=<public-key>&hash=<md5(ts+privateKey+publicKey)>

let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text}&apikey=c2595c6e10b8e75e6bd3b3c61b14547c&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`;

function fetch_hero(){
    let hero = e.

}

function display_hero(){

}

function search(){

}

function fav_handler(){

}

function detailed_info(){

}

function show_fav(){

}
handleInput(){

}

function handleKeyandClick(e){
    if(e.target.id = 'inputBar'){
        handleInput(e.target);

    }

}

searchBtn.addEventListener('click',handleKeyandClick());
name_input.addEventListener('keyup',handleKeyandClick())