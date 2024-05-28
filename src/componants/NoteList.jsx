import NoteCard from './NoteList/NoteCard';
import {useRef, useContext, useState} from 'react';
import Fuse from 'fuse.js';
import './NoteList/NoteList.scss';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {DataProvider} from '../logicsAndContext/Context';
import DeleteModel from './DeleteModel';
const portalDom = document.getElementById('portal');
import {createPortal} from 'react-dom';

function NoteList() {
  const {notes, searchTerm} = useContext(DataProvider);
  const notesWrapper = useRef(null);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [idOfDeleteNote, setIdOfDeleteNote] = useState('');

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
      {isDeleteModelOpen && createPortal(<DeleteModel idOfDeleteNote={idOfDeleteNote} setIsDeleteModelOpen={setIsDeleteModelOpen} />, portalDom)}
      <div className='note-list' ref={notesWrapper}>
        {searchResults.length !== 0 &&
          searchResults.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              heading={note.heading}
              note={note.note}
              date={note.date}
              setIsDeleteModelOpen={setIsDeleteModelOpen}
              setIdOfDeleteNote={setIdOfDeleteNote}
            />
          ))}
      </div>
      {searchResults.length == 0 && <div className='no-notes'>Empty Notes</div>}
    </div>
  );
}

export default NoteList;
