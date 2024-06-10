import {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {db, auth} from '../config/FireBaseConfig';
import {collection, getDocs, orderBy, where, query} from 'firebase/firestore';

const DataProvider = createContext();

function Context({children}) {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [dataChange, setDataChange] = useState(0);

  const value = {notes, setNotes, searchTerm, setSearchTerm, setDataChange, isLoading, isLogIn, userId};

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogIn(true);
        setUserId(user.uid);
        console.log(userId);
      } else {
        setIsLogIn(false);
        setUserId(null);
      }
    });
    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    const getFireStoreDocs = async () => {
      try {
        setIsLoading(true);
        const notesCollection = query(collection(db, 'Notes'), where('userId', '==', userId), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(notesCollection);

        const notesArray = [];
        querySnapshot.forEach((doc) => {
          const createdAt = doc.data().createdAt.toDate().toLocaleString();
          notesArray.push({...doc.data(), createdAt});
        });
        setNotes(() => [...notesArray]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getFireStoreDocs();
  }, [userId, dataChange]);

  return <DataProvider.Provider value={value}>{children}</DataProvider.Provider>;
}

export default Context;
export {DataProvider};
