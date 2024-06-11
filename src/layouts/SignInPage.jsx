import {useContext} from 'react';
import SignInForm from '../componants/signInForm/SignInForm';
import {DataProvider} from '../context/Context';
import useSignInLogic from '../hooks/useSignInLogic';
import {IoIosArrowBack} from 'react-icons/io';
import './SignInPage.scss';
import {Link} from 'react-router-dom';

function SignInPage() {
  const {isLogIn} = useContext(DataProvider);
  const {logOut} = useSignInLogic();

  return (
    <div className='sign-in-page relative'>
      <Link to='/'>
        <button className='absolute -top-12 left-0 font-medium p-1 pl-3 pr-4 rounded-full  hover:bg-neutral-50 flex items-center gap-1'>
          <IoIosArrowBack />
          back
        </button>
      </Link>

      {isLogIn ? (
        <div className=' flex flex-col items-center '>
          <h2 className=' text-neutral-900 mb-4 text-2xl font-semibold'>You Already log in</h2>
          <button className='login-button bg-blue-500 px-4 py-2 rounded-md text-white font-medium text-sm' onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        <SignInForm />
      )}
    </div>
  );
}

export default SignInPage;
