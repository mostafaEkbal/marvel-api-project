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
            filter_search_results(search_term);
            return;
        }
        fetch(`${baseURL}&nameStartsWith=${e.target.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            fetch_limit ++;
            let results = data.data.results;
            characterNames = [];
            results.forEach(element => {
                characterNames.push(element.name);
            })
            filter_search_results(search_term);
        })
    })
}

function empty_search_results() {
    search_results.classList.remove('search__results--active');
}

function filter_search_results(searchTerm) {
    characterNames.forEach((character, num) => {
        if (character.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            search_results.classList.add('search__results--active');
            search_list.innerHTML += `<li class='search__item' id="search__item${num}">${character}</li>`;
            searchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
            let item = document.getElementById(`search__item${num}`);
            let pattern = new RegExp(searchTerm, "i");
            item.innerHTML = item.textContent.replace(pattern, match => `<b>${match}</b>`);
        }
        if (search_list.innerHTML === '') {
            search_results.classList.remove('search__results--active')
        }
    });
}

get_search_results();
