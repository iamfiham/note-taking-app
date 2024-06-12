import {FaPlus} from 'react-icons/fa6';
import './NavBar/NavBar.scss';
import {Link, useLocation} from 'react-router-dom';
import SearchBar from './NavBar/SearchBar';
import {useContext, useEffect, useState} from 'react';
import profilePic from '../assets/DummyUser.jpg';
import ProfilePopup from './ProfilePopup';

import {DataProvider} from '../context/Context';
import {auth} from '../config/FireBaseConfig';
import useSignIn from '../hooks/useSignIn';

function NavBar() {
  const location = useLocation();
  const [hasBoxShadow, setHasBoxShadow] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const {isLogIn} = useContext(DataProvider);
  const {logOut} = useSignIn();

  const user = auth.currentUser;

  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      <div className={`nav-bar-wrapper ${hasBoxShadow && 'has-shadow'}`}>
        <div className='nav-bar'>
          {isLogIn && isProfileOpen && (
            <ProfilePopup
              componentStyle='absolute right-0 top-16'
              displayName={displayName ? displayName : 'Unknown User'}
              email={email}
              logOut={logOut}
              setIsProfileOpen={setIsProfileOpen}
              photoURL={photoURL ? photoURL : profilePic}
            />
          )}

          <Link to='/'>
            <h2 className='logo'>
              <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                <path
                  fill='black'
                  d='M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35z'
                />
              </svg>
              note.
            </h2>
          </Link>
          {location.pathname === '/' && (
            <span className='sm:block hidden w-[350px]'>
              <SearchBar />
            </span>
          )}

          {isLogIn && location.pathname === '/' && (
            <Link to='/create' className='navigation-link'>
              <button className='navigation'>
                <FaPlus /> New note
              </button>
            </Link>
          )}

          {isLogIn ? (
            <img
              src={photoURL ? photoURL : profilePic}
              alt=''
              className='aspect-square w-8 object-cover rounded-full cursor-pointer origin-[right_center]'
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
          ) : (
            <div className='flex gap-2'>
              <Link to='/sign-in'>
                <button className=' font-medium border border-neutral-300 text-neutral-900 rounded-full px-[1.2em] py-[0.5em] border-solid text-sm hover:bg-neutral-50 transition-all'>
                  Log In
                </button>
              </Link>
              <button className='bg-neutral-800 font-medium border border-neutral-800 text-neutral-100 rounded-full px-[1.2em] py-[0.5em] border-solid text-sm  hover:bg-neutral-700  hover:border-neutral-700 transition-all'>
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
      {location.pathname === '/' && (
        <span className='block w-full px-4 pt-4 pb-0 mx-auto sm:hidden'>
          <SearchBar />
        </span>
      )}
    </>
  );
}

export default NavBar;
