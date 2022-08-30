import SearchItem from "./SearchItem"


const SearchResult = ({ characters }) => {
  return (
    <>
      {characters.length > 0 && <div className='search__result'>
        <ul className="search__list">
          {characters.map((character) => (
            <SearchItem key={character.id} characterName={character.name} characterPhoto={character.thumbnail.path} />
          ))}
        </ul>
      </div>}
    </>
  )
}

export default SearchResult