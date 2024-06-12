import {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {db, auth} from '../config/FireBaseConfig';
import {collection, getDocs, orderBy, where, query} from 'firebase/firestore';

const DataProvider = createContext();

function Context({children}) {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetchLoading, setIsFetchLoading] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [dataChange, setDataChange] = useState(0);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogIn(true);
        setUserId(user.uid);
      } else {
        setIsLogIn(false);
        setUserId(null);
      }
      setAuthLoading(false);
    });
    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    const getFireStoreDocs = async () => {
      try {
        setIsFetchLoading(true);
        if (isLogIn && userId) {
          const notesCollection = query(collection(db, 'Notes'), where('userId', '==', userId), orderBy('createdAt', 'desc'));
          const querySnapshot = await getDocs(notesCollection);
          const notesArray = [];

          querySnapshot.forEach((doc) => {
            const createdAt = doc.data().createdAt.toDate().toLocaleString();
            notesArray.push({id: doc.id, ...doc.data(), createdAt});
          });
          setNotes(() => [...notesArray]);
        } else {
          setNotes(() => []);
        }
        setIsFetchLoading(false);
      } catch (err) {
        console.log(err);
        setIsFetchLoading(false);
      }
    };
    if (typeof isLogIn === 'boolean' && userId !== null) {
      getFireStoreDocs();
    }
  }, [isLogIn, userId, dataChange]);

  const value = {notes, setNotes, searchTerm, setSearchTerm, setDataChange, isFetchLoading, isLogIn, userId, authLoading};

  return <DataProvider.Provider value={value}>{children}</DataProvider.Provider>;
}

export default Context;
export {DataProvider};
