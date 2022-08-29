import { baseURL } from "./priv.js";

const search_input = document.getElementById('search-input');
const search_results = document.getElementById('search-results');
const search_list = document.getElementById('search-list');
const search_button = document.getElementById('search-button');
const character_info = document.querySelector('.character-info')
let characterNames = []
let allData = [];

function get_search_results() {
    let fetch_limit = 0;
    search_input.addEventListener('input', (e) => {
        let search_term = e.target.value;
        search_list.innerHTML = "";
        if(search_term === ''){
            empty_search_results();
            fetch_limit = 0;
            return;
        }
        if(search_term.length > 1 || fetch_limit > 0){
            filter_search_results(search_term);
            searchItemsClickListener();
            return;
        }
        fetch(`${baseURL}&nameStartsWith=${e.target.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            fetch_limit ++;
            allData = data.data.results;
            characterNames = [];
            allData.forEach(element => {
                characterNames.push(element.name);
            })
            filter_search_results(search_term);
            searchItemsClickListener();
            
        })
        e.preventDefault();
    })
}

function empty_search_results() {
    search_results.classList.remove('search__results--active');
}

function filter_search_results(searchTerm) {
    characterNames.forEach((character, num) => {
        if (character.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            search_results.classList.add('search__results--active');
            /* search_list.innerHTML += `<li class='search__item' id="search__item${num}">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_small.jpg" alt="item${num} thumbnail">
            <span>${character}</span></li>`; */
            let searchItem = document.createElement('li');
            let searchName = document.createElement('span');
            let searchImage = document.createElement('img');
            searchItem.id = `search__item${num}`
            searchItem.classList.add('search__item');
            searchImage.src = allData[num].thumbnail.path + '/standard_small.jpg';
            searchImage.alt = `item${num} thumbnail`
            let characterName = document.createTextNode(character);
            searchName.append(characterName);
            searchItem.append(searchImage, searchName);
            search_list.append(searchItem);
            searchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
            /* let searchItem = document.querySelector(`#search__item${num}`); */
            let pattern = new RegExp(searchTerm, "i");
            searchName.innerHTML = searchName.textContent.replace(pattern, match => `<span style="color: #000;">${match}</span>`);
            
        }
        if (search_list.innerHTML === '') {
            search_results.classList.remove('search__results--active')
        }
    });
}

function searchItemsClickListener() {
    const searchItems = [...document.querySelectorAll('.search__item')];
    searchItems.forEach((li, num) => {
        li.addEventListener('click', (e) => {
            let liText = li.textContent;
            search_input.value = liText;
            populateCharacterInfo(num);
            e.preventDefault();
        });
    });
}

function populateCharacterInfo(characterNum) {
    let characterLayout = '';
    for(let i = 0; i <= 5; i++) {
        characterLayout += `<div>${allData[characterNum].comics.items[i].name}</div>`;
    }
    character_info.innerHTML = `
                <img src="${allData[characterNum].thumbnail.path + '/portrait_incredible.jpg'}" alt="portrait_incredible" class="character-info__image">
                <div class="character-info__story">
                    <h1 class="character-info__name">${allData[characterNum].name}</h1>
                    <p class="character-info__description">${allData[characterNum].description}</p>
                    <div class="character-info__comics character-info__card"> ${characterLayout} </div>
                    <div class="character-info__events character-info__card"> ${allData[characterNum].events.items[0].name} </div>
                    <div class="character-info__series character-info__card"> ${allData[characterNum].series.items[0].name} </div>
                    <div class="character-info__stories character-info__card"> ${allData[characterNum].stories.items[0].name} </div>
                </div>
    `
}

get_search_results();
