import SearchResult from './SearchResult'
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <header>
        <form className='search' autoComplete='off'>
            <input type="text" className='search__input' placeholder='Search marvel characters' />
            <button className='search__button'>
                < BiSearch className='search__icon' onClick={(e) => {e.preventDefault()}}/>
            </button>
        </form>
        < SearchResult />
    </header>
  )
}

export default Header