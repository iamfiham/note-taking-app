import {useNavigate} from 'react-router-dom';
import {auth} from '../config/FireBaseConfig';
import {GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

function useSignIn() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signInWithGoogle = (setIsLoadBarOpen) => {
    setIsLoadBarOpen(true);
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/');
        setIsLoadBarOpen(false);
      })
      .catch((error) => {
        setIsLoadBarOpen(false);
        console.log(error);
      });
  };

  const signInWithEmail = async (email, password) => {
    let result;
    let errorCode = null;
    await signInWithEmailAndPassword(auth, email.trim(), password.trim())
      .then(() => {
        result = true;
      })
      .catch((error) => {
        result = false;
        errorCode = error.code;
      });

    return {result, errorCode};
  };

  const signUpWithEmail = async (email, password) => {
    let result;
    let errorCode = null;

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        result = true;
      })
      .catch((error) => {
        result = false;
        errorCode = error.code;
      });
    return {result, errorCode};
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out succesfull');
        navigate('/home');
      })
      .catch(() => {
        console.log('sign out error');
      });
  };

  return {
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logOut,
  };
}

export default useSignIn;
