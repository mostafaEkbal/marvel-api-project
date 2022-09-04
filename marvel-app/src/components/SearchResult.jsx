import SearchItem from './SearchItem';

const SearchResult = ({ characters, search, onSelect }) => {
  return (
    <>
      {characters.length > 0 && (
        <div className='search__result'>
          <ul className='search__list'>
            {characters
              .filter((character) => {
                return search.toLowerCase() === ''
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
        </div>
      )}
    </>
  );
};

export default SearchResult;
