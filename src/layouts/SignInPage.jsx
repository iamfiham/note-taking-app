import {useContext} from 'react';
import SignInForm from '../componants/signInForm/SignInForm';
import {DataProvider} from '../context/Context';
import useSignInLogic from '../hooks/useSignInLogic';
import './SignInPage.scss';

function SignInPage() {
  const {isLogIn} = useContext(DataProvider);
  const {logOut} = useSignInLogic();

  return (
    <div className='sign-in-page'>
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
