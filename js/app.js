const baseURL = `http://gateway.marvel.com/v1/public/characters?orderBy=name&ts=1&apikey=f5ae36bdac41720b22fe45a619940cd7&hash=a473899226e72fc5a0138c0edf48520f&limit=100`;
const container = document.querySelector('.container');
const search_input = document.getElementById('search-input');
const search_results = document.getElementById('search-results');
const search_button = document.getElementById('search-button');
let num = 1;
let characterNames = [

]

function get_search_results() {
    search_input.addEventListener('input', (e) => {
        if(e.target.value === ''){
            search_results.innerHTML = "";
            return;
        }
        if(e.target.value.length > 1){return}
        fetch(baseURL + `&nameStartsWith=${e.target.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let results = data.data.results;
            results.forEach(element => {
                console.log(element);
                let character_list = document.createElement('li');
                character_list.append(element.name);
                search_results.append(character_list);
            })
        })
    })
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



