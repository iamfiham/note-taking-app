import './NavBar/NavBar.scss';
import {FaPlus} from 'react-icons/fa6';
import {Link, useLocation} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {FaNoteSticky} from 'react-icons/fa6';
import SearchBar from './NavBar/SearchBar';
import {useEffect, useState} from 'react';

function NavBar({searchTerm, setSearchTerm}) {
  const location = useLocation();
  const [hasBoxShadow, setHasBoxShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasBoxShadow(true);
        return;
      }
      setHasBoxShadow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav-bar ${hasBoxShadow && 'has-shadow'}`}>
        <Link to='/'>
          <h2>
            <FaNoteSticky />
            note.
          </h2>
        </Link>
        {location.pathname === '/' && (
          <span className='sm:block hidden w-[350px]'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </span>
        )}
        {location.pathname === '/' ? (
          <Link to='/create'>
            <button>
              <FaPlus />
            </button>
          </Link>
        ) : (
          <Link to='/'>
            <button>
              <IoIosArrowBack />
            </button>
          </Link>
        )}
      </div>
      {location.pathname === '/' && (
        <span className='sm:hidden block px-4 pt-8 pb-0 mx-auto w-full'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </span>
      )}
    </>
  );
}

export default NavBar;
