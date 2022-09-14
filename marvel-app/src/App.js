import PocketBase from 'pocketbase';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { baseURL } from './priv';
import Header from './components/Header';
import CharacterDetails from './components/CharacterDetails';
import HomeContent from './components/HomeContent';

async function App() {
  const [characters, setCharacters] = useState([]);
  const [fetchLimit, setFetchLimit] = useState(false);
  const [loading, setLoading] = useState(true);

  const client = new PocketBase('http://127.0.0.1:8090');

  // OnInput
  const onInput = async searchValue => {
    if (searchValue.length === 1 && !fetchLimit) {
      console.log('loading');
      const charactersData = await fetchCharacters(searchValue);
      setCharacters(charactersData);
      setFetchLimit(true);
      setLoading(false);
      console.log('loaded');
    }
    if (!searchValue) {
      setCharacters([]);
      setLoading(true);
      setFetchLimit(false);
    }
  };

  // Fetch Characters Data
  const fetchCharacters = async searchValue => {
    const res = await fetch(`${baseURL}&nameStartsWith=${searchValue}`);
    const data = await res.json();

    if (data.data.total <= 100) {
      return data.data.results;
    }

    if (data.data.total <= 200) {
      const res2 = await fetch(
        `${baseURL}&nameStartsWith=${searchValue}&offset=100`
      );
      const data2 = await res2.json();
      return [...data.data.results, ...data2.data.results];
    }

    const res2 = await fetch(
      `${baseURL}&nameStartsWith=${searchValue}&offset=100`
    );
    const data2 = await res2.json();
    const res3 = await fetch(
      `${baseURL}&nameStartsWith=${searchValue}&offset=200`
    );
    const data3 = await res3.json();
    return [...data.data.results, ...data2.data.results, ...data3.data.results];
  };

  // On Select
  const onSelect = () => {
    setCharacters([]);
    setLoading(true);
    setFetchLimit(false);
  };

  return (
    <div className='container'>
      <Header
        characters={characters}
        onSearch={onInput}
        onSelect={onSelect}
        loading={loading}
      />
      <main className='content'>
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/character/:name' element={<CharacterDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
