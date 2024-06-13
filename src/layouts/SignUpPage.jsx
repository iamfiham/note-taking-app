import {useContext} from 'react';
import {DataProvider} from '../context/Context';
import useSignIn from '../hooks/useSignIn';
import {IoIosArrowBack} from 'react-icons/io';
import './SignUpPage.scss';
import {Link} from 'react-router-dom';

function SignUpPage({children}) {
  const {isLogIn} = useContext(DataProvider);
  const {logOut} = useSignIn();
  const backButtonRoute = isLogIn ? '/' : '/home';

  return (
    <div className='sign-in-page relative'>
      <Link to={backButtonRoute}>
        <button className='absolute -top-12 left-0 font-medium text-base/none p-1 pl-1 pr-2 rounded-full  hover:bg-neutral-50 flex items-center gap-1'>
          <IoIosArrowBack />
          back
        </button>
      </Link>

      {isLogIn ? (
        <div className='flex flex-col items-center '>
          <h2 className=' text-neutral-900 mb-4 text-2xl font-semibold'>You Already log in</h2>
          <button className='login-button bg-blue-500 px-4 py-2 rounded-md text-white font-medium text-sm' onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default SignUpPage;
