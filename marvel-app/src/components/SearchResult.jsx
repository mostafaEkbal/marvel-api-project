const SearchResult = ({ characters }) => {
  return (
    <>
      {characters.length > 0 && <div className='search__result'>
        <ul className="search__list">
          {characters.map((character, index) => (
            <li key={index}>{character.name}</li>
          ))}
        </ul>
      </div>}
    </>
  )
}

export default SearchResult