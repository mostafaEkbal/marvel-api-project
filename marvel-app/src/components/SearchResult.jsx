import SearchItem from "./SearchItem";

const SearchResult = ({ characters, search }) => {
  return (
    <>
      {characters.length > 0 && (
        <div className='search__result'>
          <ul className='search__list'>
            {characters
              .filter((character) => {
                return search.toLowerCase() === ""
                  ? character
                  : character.name.toLowerCase().includes(search);
              })
              .map((character) => (
                <SearchItem
                  key={character.id}
                  characterName={character.name}
                  characterPhoto={character.thumbnail.path}
                />
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchResult;
