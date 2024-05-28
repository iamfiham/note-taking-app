import {createContext, useEffect, useState} from 'react';

const DataProvider = createContext();

function Context({children}) {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('Notes')) || []);
  const [searchTerm, setSearchTerm] = useState('');
  const value = {notes, setNotes, searchTerm, setSearchTerm};

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return <DataProvider.Provider value={value}>{children}</DataProvider.Provider>;
}

export default Context;
export {DataProvider};
