import { baseURL } from "./priv.js";

const search_input = document.getElementById('search-input');
const search_results = document.getElementById('search-results');
const search_list = document.getElementById('search-list');
const search_button = document.getElementById('search-button');
let characterNames = [

]

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
            fitler_search_results(search_term);
            return;
        }
        fetch(`${baseURL}&nameStartsWith=${e.target.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            fetch_limit ++;
            let results = data.data.results;
            search_results.classList.add('search__results--active');
            characterNames = [];
            results.forEach(element => {
                characterNames.push(element.name);
                search_list.innerHTML += `<li class='search__item'>${element.name}</li>`;
            })
        })
    })
}

function empty_search_results() {
    search_results.classList.remove('search__results--active');
}

function fitler_search_results(searchTerm) {
    characterNames.forEach(character => {
        if (character.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            search_list.innerHTML += `<li class='search__item'>${character}</li>`
        }
    });
}

get_search_results();
