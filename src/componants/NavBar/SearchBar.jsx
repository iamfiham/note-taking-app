import './SearchBar.scss';
import {IoClose} from 'react-icons/io5';
import {FiSearch} from 'react-icons/fi';
import {useContext} from 'react';
import {DataProvider} from '../../context/Context';

function SearchBar() {
  const {searchTerm, setSearchTerm} = useContext(DataProvider);

  const clearSearchBox = () => {
    setSearchTerm('');
  };

  return (
    <div className='search-box'>
      <span>
        <FiSearch />
      </span>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          window.scrollTo(0, 0);
        }}
      />
      {searchTerm ? (
        <span onClick={clearSearchBox}>
          <IoClose id='closeButton' />
        </span>
      ) : null}
    </div>
  );
}

export default SearchBar;
