const SearchItem = ({ characterName, characterPhoto }) => {
  return (
    <li className='search__item'>
        <img 
        src={characterPhoto + '/standard_small.jpg'} 
        alt={characterName + '-small-photo'} 
        />
        <span>{characterName}</span>
    </li>
  )
}

export default SearchItem