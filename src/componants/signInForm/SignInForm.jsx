import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa6';
import {MdLockOutline} from 'react-icons/md';
import {MdOutlineMailOutline} from 'react-icons/md';
import './SignInForm.scss';
import {MdErrorOutline} from 'react-icons/md';
import useSignIn from '../../hooks/useSignIn';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';

export default function SignInForm() {
  const {signInWithGoogle, signInWithEmail} = useSignIn();
  const [isLoginErrorOpen, setIsLoginErrorOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordToolTipOpen, setIsPasswordToolTipOpen] = useState(false);
  const [isEmailToolTipOpen, setIsEmailToolTipOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoadBarOpen, setIsLoadBarOpen] = useState(false);

  const navigate = useNavigate();

  const googleSignIn = () => {
    signInWithGoogle(setIsLoadBarOpen);
  };

  const emailSignIn = async () => {
    let isInputCorrect = true;

    if (email.trim() == '') {
      setIsEmailToolTipOpen(true);
      console.log('empty email field');
      isInputCorrect = false;
    }
    if (password.trim() == '') {
      setIsPasswordToolTipOpen(true);
      console.log('empty password field');
      isInputCorrect = false;
    }
    if (isInputCorrect) {
      setIsButtonDisabled(true);
      setIsLoadBarOpen(true);

      let {result, errorCode} = await signInWithEmail(email.trim(), password.trim());

      setIsLoadBarOpen(false);
      setIsButtonDisabled(false);

      if (result) {
        setEmail('');
        setPassword('');
        navigate('/');
      } else {
        setIsLoginErrorOpen(true);
        console.log(errorCode);
      }
    }
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

  const animation = {
    visible: {opacity: 1, willChange: 'opacity'},
    hidden: {opacity: 0, willChange: 'opacity'},
  };
  const transitionSettings = {ease: 'easeInOut', duration: 0.3};

  return (
    <motion.div initial='hidden' animate='visible' exit='hidden' transition={transitionSettings} variants={animation} className='sign-in-form'>
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
        Don't have an account?
        <Link to='/sign-up'>
          <span> Create an account</span>
        </Link>
      </p>
      <p className={`error-msg ${isLoginErrorOpen && 'show'}`}>Invalid Email or Password</p>
    </motion.div>
  );
}
