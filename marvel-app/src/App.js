import { useState } from "react";
import { baseURL } from "./priv";
import Header from "./components/Header";

function App() {
  const [characters, setCharacters] = useState([]);
  const [fetchLimit, setFetchLimit] = useState(false)

  // OnInput
  const onInput = async (searchValue) => {
    if(searchValue.length === 1 && !fetchLimit) {
      const charactersData = await fetchCharacters(searchValue)
      setCharacters(charactersData)
      setFetchLimit(true)
    }
    if(!searchValue) {
      setCharacters([])
      setFetchLimit(false)
    }
  }

  // Fetch Characters Data
  const fetchCharacters = async (searchValue) => {
    const res = await fetch(`${baseURL}&nameStartsWith=${searchValue}`);
    let data = await res.json();

    /* if(data.data.total > 100) {
      const res2 = await fetch(`${baseURL}&nameStartsWith=${searchValue}&offset=100`)
      data += await res2.json();
    } */

    return data.data.results
  }

  return (
    <div className='container'>
      <Header characters={characters} onSearch={onInput} />
    </div>
  );
}

export default App;
