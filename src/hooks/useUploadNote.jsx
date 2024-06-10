import {db} from '../config/FireBaseConfig';
import {doc, setDoc, collection, Timestamp} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import {DataProvider} from '../context/Context';
import {useContext} from 'react';

function useUploadNote() {
  const {userId, setDataChange} = useContext(DataProvider);
  const {isLogin} = useContext(DataProvider);

  const setNewFireStoreDoc = async (title, note) => {
    if (isLogin) {
      try {
        await setDoc(doc(collection(db, 'Notes')), {
          noteId: uuid(),
          userId: userId,
          title: title,
          note: note,
          createdAt: Timestamp.now(),
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

  return {setNewFireStoreDoc};
}

export default useUploadNote;
