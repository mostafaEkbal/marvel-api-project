import SearchItem from './SearchItem';

const SearchResult = ({ characters, search, onSelect, loading }) => {
  const filtered = characters.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className='search__result'>
        <ul className='search__list'>
          {!loading ? (
            filtered.length ? (
              filtered.map(character => (
                <SearchItem
                  key={character.id}
                  character={character}
                  onSelect={onSelect}
                />
              ))
            ) : (
              <h3>Result Not Found</h3>
            )
          ) : (
            <li>
              <h2>Please a wait a second loading...</h2>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SearchResult;
