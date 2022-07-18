import { baseURL } from "./priv.js";

const search_input = document.getElementById('search-input');
const search_results = document.getElementById('search-results');
const search_list = document.getElementById('search-list');
const search_button = document.getElementById('search-button');
let characterNames = [

]

function get_search_results() {
    search_input.addEventListener('input', (e) => {
        let search_term = e.target.value;
        search_list.innerHTML = "";
        if(search_term === ''){
            empty_search_results();
        }
        if(search_term.length > 1){
            fitler_search_results(search_term);
        }
        fetch(`${baseURL}&nameStartsWith=${e.target.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let results = data.data.results;
            search_results.classList.add('search__results--active');
            characterNames = [];
            results.forEach(element => {
                characterNames.push(element.name);
                let character_list = document.createElement('li');
                character_list.classList.add('search__item');
                character_list.append(element.name);
                search_list.append(character_list);
                console.log(characterNames);
            })
        })
    })
}

function empty_search_results() {
    search_results.classList.remove('search__results--active');
    return;
}

function fitler_search_results(searchTerm) {
    characterNames.forEach(character => {
        if (character.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            search_list.innerHTML += `<li>${character}</li>`;
        }
    });
    return;
}

get_search_results();
