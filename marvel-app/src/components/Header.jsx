import SearchResult from "./SearchResult";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

const Header = ({ characters, onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <header>
      <form className='search' autoComplete='off'>
        <input
          type='text'
          className='search__input'
          placeholder='Search marvel characters'
          onInput={(e) => onSearch(e.target.value)}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search__button'>
          <ImSearch
            className='search__icon'
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </button>
      </form>
      <SearchResult characters={characters} search={search} />
    </header>
  );
};

export default Header;
