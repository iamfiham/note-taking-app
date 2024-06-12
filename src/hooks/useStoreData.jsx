import {db} from '../config/FireBaseConfig';
import {doc, setDoc, updateDoc, deleteDoc, collection, Timestamp} from 'firebase/firestore';
import {DataProvider} from '../context/Context';
import {useContext} from 'react';

function useStoreData() {
  const {userId, setDataChange, isLogIn} = useContext(DataProvider);

  const setNewFireStoreDoc = async (title, note) => {
    if (isLogIn) {
      try {
        await setDoc(doc(collection(db, 'Notes')), {
          userId: userId,
          title: title,
          note: note,
          createdAt: Timestamp.now(),
          lastModified: Timestamp.now(),
        });
        setDataChange((prev) => prev + 1);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    console.log('login first');
    return;
  };

  const deleteFireStoreDoc = async (id) => {
    if (isLogIn) {
      try {
        console.log(`Attempting to delete document with ID: ${id}`);
        await deleteDoc(doc(db, 'Notes', id));
        setDataChange((prev) => prev + 1);
        console.log('doc deleted success');
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    console.log('login first');
    return;
  };

  const editFirbaseDoc = async (id, title, note) => {
    if (isLogIn) {
      try {
        console.log(`Attempting to edit document with ID: ${id}`);
        const washingtonRef = doc(db, 'Notes', id);
        await updateDoc(washingtonRef, {
          title: title,
          note: note,
          lastModified: Timestamp.now(),
        });
        setDataChange((prev) => prev + 1);
        console.log('doc edited success');
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    console.log('login first');
    return;
  };

  return {setNewFireStoreDoc, deleteFireStoreDoc, editFirbaseDoc};
}

export default useStoreData;
