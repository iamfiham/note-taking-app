import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa6';
import {MdLockOutline} from 'react-icons/md';
import {MdOutlineMailOutline} from 'react-icons/md';
import './SignInForm.scss';
import {MdErrorOutline} from 'react-icons/md';
import useSignInLogic from '../../hooks/useSignInLogic';
import {useState} from 'react';

export default function SignInForm() {
  const {isLoginErrorOpen, setIsLoginErrorOpen, signInWithGoogle, signInWithEmail} = useSignInLogic();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordToolTipOpen, setIsPasswordToolTipOpen] = useState(false);
  const [isEmailToolTipOpen, setIsEmailToolTipOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoadBarOpen, setIsLoadBarOpen] = useState(false);

  const googleSignIn = () => {
    signInWithGoogle(setIsLoadBarOpen);
  };
  const emailSignIn = () => {
    if (email.trim() == '' && password.trim() == '') {
      setIsEmailToolTipOpen(true);
      setIsPasswordToolTipOpen(true);
      console.log('email and password fields empty');
      return;
    }
    if (email.trim() == '') {
      setIsEmailToolTipOpen(true);
      console.log('empty email field');
      return;
    }
    if (password.trim() == '') {
      setIsPasswordToolTipOpen(true);
      console.log('empty password field');
      return;
    }
    signInWithEmail(email, password, setEmail, setPassword, setIsButtonDisabled, setIsLoadBarOpen);
  };
  const passswordOnChange = (e) => {
    setIsPasswordToolTipOpen(false);
    setIsLoginErrorOpen(false);
    setPassword(e.target.value);
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
    setIsEmailToolTipOpen(false);
    setIsLoginErrorOpen(false);
  };

  return (
    <div className='sign-in-form'>
      {isLoadBarOpen && <div className='load-bar'></div>}
      <h2>Log in to your Account</h2>
      <p className='sub-head'>Wellcome back! Select method to log in</p>
      <div className='google-button-div'>
        <button className='google-button' onClick={googleSignIn}>
          <FcGoogle /> Google
        </button>
        <button className='google-button'>
          <FaFacebook /> Facebook
        </button>
      </div>
      <div className='h-[1px] bg-neutral-200 relative mb-4'>
        <p className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-neutral-500  px-2 text-xs'>or continue with email</p>
      </div>

      <div className='input'>
        <MdLockOutline className='icon' />
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => {
            emailOnChange(e);
          }}
        />
        {isEmailToolTipOpen && <MdErrorOutline className='error' />}
      </div>
      <div className='input'>
        <MdOutlineMailOutline className='icon' />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => {
            passswordOnChange(e);
          }}
        />
        {isPasswordToolTipOpen && <MdErrorOutline className='error' />}
      </div>
      <p className='forgot-password'>Forgot Password?</p>
      <button className='login-button' onClick={emailSignIn} disabled={isButtonDisabled}>
        Log in
      </button>
      <p className='createAnAccount-text'>
        Don't have an account? <span> Create an account</span>
      </p>
      <p className={`error-msg ${isLoginErrorOpen && 'show'}`}>Invalid Email or Password</p>
    </div>
  );
}
