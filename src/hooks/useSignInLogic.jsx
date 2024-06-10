import {useNavigate} from 'react-router-dom';
import {auth} from '../config/FireBaseConfig';
import {GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';

function useSignInLogic() {
  const [isLoginErrorOpen, setIsLoginErrorOpen] = useState(false);

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signInWithGoogle = (setIsLoadBarOpen) => {
    setIsLoadBarOpen(true);
    signInWithPopup(auth, provider)
      .then(() => {
        console.log('signed in with google');
        navigate('/');
        setIsLoadBarOpen(false);
      })
      .catch((error) => {
        setIsLoadBarOpen(false);
        console.log(error);
      });
  };
  const signInWithEmail = (email, password, setEmail, setPassword, setIsButtonDisabled, setIsLoadBarOpen) => {
    setIsButtonDisabled(true);
    setIsLoadBarOpen(true);
    signInWithEmailAndPassword(auth, email.trim(), password.trim())
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('🚀 ~ signInWithEmail ~ user:', user);
        setEmail('');
        setPassword('');
        navigate('/');
        setIsLoadBarOpen(false);
        setIsButtonDisabled(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('🚀 ~ signInWithEmail ~ errorMessage:', errorCode);
        setIsLoginErrorOpen(true);
        setIsLoadBarOpen(false);
        setIsButtonDisabled(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out succesfull');
      })
      .catch(() => {
        console.log('sign out error');
      });
  };

  return {
    isLoginErrorOpen,
    setIsLoginErrorOpen,
    signInWithGoogle,
    signInWithEmail,
    logOut,
  };
}

export default useSignInLogic;
