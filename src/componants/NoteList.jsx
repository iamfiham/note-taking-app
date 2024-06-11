import NoteCard from './NoteList/NoteCard';
import {useRef, useContext, useState} from 'react';
import Fuse from 'fuse.js';
import './NoteList/NoteList.scss';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {DataProvider} from '../context/Context';
import DeleteModel from './DeleteModel';
const portalDom = document.getElementById('portal');
import {createPortal} from 'react-dom';
import ZoomUi from './ZoomUi';
import PlaceHolderCollection from './placeHolders/PlaceHolderCollection';

function NoteList() {
  const {notes, searchTerm, isFetchLoading} = useContext(DataProvider);
  const notesWrapper = useRef(null);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [idOfDeleteNote, setIdOfDeleteNote] = useState('');

  const fuseOptions = {
    keys: ['title', 'note'],
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

  const instructions = {
    noNotes: {
      titleTip: 'Start a New Note',
      subTitleTip: (
        <>
          No notes yet. Start writing, brand your notes <br /> will appear here for you to view and edit.
        </>
      ),
      needButton: true,
    },
    noResult: {
      titleTip: 'No notes found',
      subTitleTip: (
        <>
          No notes match your search. Try different keywords <br /> or create a new note to get started.
        </>
      ),
      needButton: false,
    },
  };

  return (
    <div className='note-list-wrapper'>
      {isDeleteModelOpen && createPortal(<DeleteModel idOfDeleteNote={idOfDeleteNote} setIsDeleteModelOpen={setIsDeleteModelOpen} />, portalDom)}
      <div className='note-list' ref={notesWrapper}>
        {!isFetchLoading &&
          searchResults.length !== 0 &&
          searchResults.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              heading={note.title}
              note={note.note}
              date={note.createdAt}
              setIsDeleteModelOpen={setIsDeleteModelOpen}
              setIdOfDeleteNote={setIdOfDeleteNote}
            />
          ))}
      </div>

      {isFetchLoading ? (
        <PlaceHolderCollection />
      ) : searchResults.length == 0 ? (
        searchTerm.trim() === '' ? (
          <ZoomUi {...instructions.noNotes} />
        ) : (
          <ZoomUi {...instructions.noResult} />
        )
      ) : null}
    </div>
  );
}

export default NoteList;
