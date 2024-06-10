import {FaPlus} from 'react-icons/fa6';
import './NavBar/NavBar.scss';
import {Link, useLocation} from 'react-router-dom';
import {FaNoteSticky} from 'react-icons/fa6';
import SearchBar from './NavBar/SearchBar';
import {useContext, useEffect, useState} from 'react';
import profilePic from '../assets/DummyUser.jpg';
import ProfilePopup from './ProfilePopup';

import {DataProvider} from '../context/Context';
import {auth} from '../config/FireBaseConfig';
import useSignInLogic from '../hooks/useSignInLogic';

function NavBar() {
  const location = useLocation();
  const [hasBoxShadow, setHasBoxShadow] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const {isLogIn} = useContext(DataProvider);
  const {logOut} = useSignInLogic();

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
      <div className={`nav-bar ${hasBoxShadow && 'has-shadow'}`}>
        {isLogIn && isProfileOpen && (
          <ProfilePopup
            componentStyle='absolute right-6 top-16'
            displayName={displayName ? displayName : 'Unknown User'}
            email={email}
            logOut={logOut}
            setIsProfileOpen={setIsProfileOpen}
            photoURL={photoURL ? photoURL : profilePic}
          />
        )}

        <Link to='/'>
          <h2 className='logo'>
            <FaNoteSticky />
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
              <button className=' font-medium border border-blue-300 text-blue-600 rounded-full px-[1.2em] py-[0.5em] border-solid text-sm hover:bg-blue-50 transition-all'>
                Log In
              </button>
            </Link>
            <button className='bg-blue-600 font-medium border border-blue-500 text-white rounded-full px-[1.2em] py-[0.5em] border-solid text-sm  hover:bg-blue-700 transition-all'>
              Sign Up
            </button>
          </div>
        )}
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
