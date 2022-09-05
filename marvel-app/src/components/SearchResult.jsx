import SearchItem from './SearchItem';

const SearchResult = ({ characters, search, onSelect, loading }) => {
  return (
    <>
      <div className='search__result'>
        {search.length >= 3 ? (
          <ul className='search__list'>
            {characters
              .filter((character) => {
                return loading
                  ? character
                  : character.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((character) => (
                <SearchItem
                  key={character.id}
                  character={character}
                  onSelect={onSelect}
                />
              ))}
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
