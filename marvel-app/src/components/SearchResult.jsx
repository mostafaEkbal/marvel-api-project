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
              <h2 style={{ margin: '.3rem .5rem' }}>Result Not Found</h2>
            )
          ) : (
            <li>
              <h2 style={{ margin: '.3rem .5rem' }}>
                Please a wait a second loading...
              </h2>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SearchResult;
