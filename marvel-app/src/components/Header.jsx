import SearchResult from './SearchResult'
import { ImSearch} from 'react-icons/im'

const Header = ({ onSearch }) => {
  return (
    <header>
        <form className='search' autoComplete='off'>
            <input type="text" className='search__input' placeholder='Search marvel characters' 
            onInput={(e) => onSearch(e.target.value)} />
            <button className='search__button'>
                <ImSearch className='search__icon' onClick={(e) => {e.preventDefault()}} />
            </button>
        </form>
        <SearchResult />
    </header>
  )
}

export default Header