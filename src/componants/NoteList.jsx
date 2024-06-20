import NoteCard from './NoteList/NoteCard';
import {useContext, useEffect, useState, useRef} from 'react';
import Fuse from 'fuse.js';
import './NoteList/NoteList.scss';
import {DataProvider} from '../context/Context';
import DeleteModel from './DeleteModel';
import {createPortal} from 'react-dom';
import ZoomUi from './ZoomUi';
import PlaceHolderCollection from './placeHolders/PlaceHolderCollection';
import {motion} from 'framer-motion';

const portalDom = document.getElementById('portal');

function NoteList() {
  const {notes, searchTerm, isFetchLoading} = useContext(DataProvider);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [idOfDeleteNote, setIdOfDeleteNote] = useState('');
  const [renderNotes, setRenderNotes] = useState(notes);
  const debounceTimeout = useRef(null);

  const fuseOptions = {
    keys: ['title', 'note'],
    threshold: 0.5,
    ignoreCase: true,
  };
  const fuse = new Fuse(notes, fuseOptions);

  useEffect(() => {
    if (isFetchLoading) {
      return;
    }
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setRenderNotes(() => {
        if (searchTerm.trim() === '') {
          return notes;
        }
        return fuse.search(searchTerm).map((result) => result.item);
      });
    }, 200);

    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [searchTerm, isFetchLoading]);

  const instructions = {
    noNotes: {
      titleTip: 'Start a New Note',
      subTitleTip: (
        <>
          No notes yet. Start writing, brand your notes <br /> will appear here for you to view and edit.
        </>
      ),
      needButton: true,
      buttonText: 'Create note',
    },
    noResult: {
      titleTip: 'No notes found',
      subTitleTip: (
        <>
          No notes match your search. Try different keywords <br /> or create a new note to get started.
        </>
      ),
      needButton: false,
      buttonText: 'Clear search',
    },
  };
  const animation = {
    visible: {
      opacity: 1,
      transition: {when: 'beforeChildren', staggerChildren: 0.1, duration: 0},
    },
    hidden: {
      opacity: 0,
      transition: {when: 'afterChildren'},
    },
  };
  const noteCardVariants = {visible: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 5}};

  return (
    <div className='note-list-wrapper'>
      {isDeleteModelOpen && createPortal(<DeleteModel idOfDeleteNote={idOfDeleteNote} setIsDeleteModelOpen={setIsDeleteModelOpen} />, portalDom)}
      {!isFetchLoading && renderNotes.length !== 0 && (
        <motion.div initial='hidden' animate='visible' exit='hidden' variants={animation} className='note-list '>
          {renderNotes.map((note) => (
            <motion.div key={note.id} variants={noteCardVariants} transition={{ease: 'easeInOut', duration: 0.25}}>
              <NoteCard
                key={note.id}
                id={note.id}
                heading={note.title}
                note={note.note}
                date={note.createdAt}
                setIsDeleteModelOpen={setIsDeleteModelOpen}
                setIdOfDeleteNote={setIdOfDeleteNote}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {isFetchLoading ? (
        <PlaceHolderCollection />
      ) : renderNotes.length == 0 ? (
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
