import { baseURL } from "./priv.js";

const container = document.querySelector('.container');
const search_input = document.getElementById('search-input');
const search_results = document.getElementById('search-results');
const search_list = document.getElementById('search-list');
const search_button = document.getElementById('search-button');
let num = 1;
let characterNames = [

]

function get_search_results() {
    search_input.addEventListener('input', (e) => {
        if(e.target.value === ''){
            empty_search_results();
        }
        if(e.target.value.length > 1){return}
        fetch(`${baseURL}&nameStartsWith=${e.target.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let results = data.data.results;
            search_results.classList.add('search__results--active');
            results.forEach(element => {
                let character_list = document.createElement('li');
                character_list.classList.add('search__item');
                character_list.append(element.name);
                search_list.append(character_list);
            })
        })
    })
}

function empty_search_results() {
    search_list.innerHTML = "";
    search_results.classList.remove('search__results--active');
    return;
}

get_search_results();

// for (let i = 0; i < 16; i++) {
//   fetch(baseURL + `&offset=${i * 100}`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => { 
//     let results = data.data.results;
//     results.forEach(element => {
//       characterNames.push(element.name);
//       let nameContainer = document.createElement('div');
//       let nameNum = document.createElement('span');
//       let thename = document.createElement('span');
//       let description = document.createElement('p');
//       description.append(element.description)
//       nameNum.append(`${num}  `);
//       thename.append(element.name);
//       nameContainer.append(nameNum);
//       nameContainer.append(thename,description);
//       container.append(nameContainer);
//       num++
//     });
//   });
// }



