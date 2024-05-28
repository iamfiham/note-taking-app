import {v4 as uuid} from 'uuid';
import {useContext} from 'react';
import {DataProvider} from './Context';

function useLogics() {
  const {setNotes} = useContext(DataProvider);

  const newNote = (title, text) => {
    const newNote = {
      id: uuid(),
      heading: title.trim() ? title.trim() : 'Unknown',
      note: text.trim(),
      date: new Date().toLocaleString(),
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  };

  const editNote = (id, title, text) => {
    setNotes((prevNotes) => {
      return prevNotes.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {...item, heading: title.trim() ? title.trim() : 'Unknown', note: text.trim()};
      });
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      const index = prevNotes.findIndex((item) => item.id === id);
      const newNotes = [...prevNotes];
      if (index == -1) {
        return prevNotes;
      }
      newNotes.splice(index, 1);
      return newNotes;
    });
  };

  return {newNote, editNote, deleteNote};
}

export default useLogics;
