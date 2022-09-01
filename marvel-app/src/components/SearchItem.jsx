import { Link } from 'react-router-dom';

const SearchItem = ({ characterName, characterPhoto }) => {
  return (
    <Link to={`/character/${characterName}`} style={{ textDecoration: 'none' }}>
      <li className='search__item'>
        <img
          src={characterPhoto + '/standard_small.jpg'}
          alt={characterName + '-small-photo'}
        />
        <span>{characterName}</span>
      </li>
    </Link>
  );
};

export default SearchItem;
