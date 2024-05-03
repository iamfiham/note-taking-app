import SearchBar from './NavBar/SearchBar';
import NoteCard from './NoteList/NoteCard';
import {useRef, useState} from 'react';
import Fuse from 'fuse.js';
import './NoteList/NoteList.scss';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

function NoteList({notes, setNotes, searchTerm}) {
  const notesWrapper = useRef(null);

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

  const fuseOptions = {
    keys: ['heading', 'note'],
    threshold: 0.5,
    ignoreCase: true,
  };
  const fuse = new Fuse(notes, fuseOptions);
  const searchResults = searchTerm.trim() === '' ? notes : fuse.search(searchTerm).map((result) => result.item);

  useGSAP(() => {
    if (notesWrapper.current.children.length > 0) {
      gsap.fromTo(notesWrapper.current.children, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.1, ease: 'power3.in', stagger: 0.05});
    }
  }, [searchResults]);

  return (
    <div className='note-list-wrapper'>
      <div className='note-list' ref={notesWrapper}>
        {searchResults.map((note) => (
          <NoteCard key={note.id} id={note.id} heading={note.heading} deleteNote={deleteNote} note={note.note} date={note.date} />
        ))}
      </div>
      {searchResults.length == 0 && <div className='no-notes'>Empty Notes</div>}
    </div>
  );
}

export default NoteList;
