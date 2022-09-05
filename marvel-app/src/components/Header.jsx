import SearchResult from './SearchResult';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

const Header = ({ characters, onSearch, onSelect, loading }) => {
  const [search, setSearch] = useState('');

  const onclick = (character) => {
    onSelect(character);
    setSearch('');
  };

  return (
    <header>
      <form className='search' autoComplete='off'>
        <input
          type='text'
          value={search}
          className='search__input'
          placeholder='Search marvel characters'
          onInput={(e) => {
            onSearch(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <button className='search__button'>
          <ImSearch
            className='search__icon'
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </button>
        {search.length > 0 && (
          <SearchResult
            characters={characters}
            search={search}
            onSelect={onclick}
            loading={loading}
          />
        )}
      </form>
    </header>
  );
};

export default Header;
