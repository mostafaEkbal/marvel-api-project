import { Link } from 'react-router-dom';

const SearchItem = ({ character, onSelect }) => {
  return (
    <Link
      to={`/character/${character.name}`}
      style={{ textDecoration: 'none' }}
      onClick={() => onSelect(character)}>
      <li className='search__item'>
        <img
          src={character.thumbnail.path + '/standard_small.jpg'}
          alt={character.name + '-small-photo'}
        />
        <span>{character.name}</span>
      </li>
    </Link>
  );
};

export default SearchItem;
