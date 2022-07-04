let baseURL = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f5ae36bdac41720b22fe45a619940cd7&hash=a473899226e72fc5a0138c0edf48520f&limit=100';
let characterNames = [

]

for (let i = 0; i < 16; i++) {
  fetch(baseURL + `&offset=${i * 100}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => { 
    let results = data.data.results;
    results.forEach(element => {
      characterNames.push(element.name)
    });
  });
}



console.log(characterNames.sort());