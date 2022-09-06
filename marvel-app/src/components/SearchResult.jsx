import { useState } from 'react';
import SearchItem from './SearchItem';

const SearchResult = ({ characters, search, onSelect, loading }) => {
  const [found, setFound] = useState(true);

  return (
    <>
      <div className='search__result'>
        {search.length >= 3 ? (
          <ul className='search__list'>
            {!loading ? (
              characters
                .filter((character) => {
                  return character.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((character) => (
                  <SearchItem
                    key={character.id}
                    character={character}
                    onSelect={onSelect}
                  />
                ))
            ) : (
              <h2>Please a wait a second loading...</h2>
            )}
          </ul>
        ) : (
          <div>
            <h3>Type 3 letters to begin search</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
