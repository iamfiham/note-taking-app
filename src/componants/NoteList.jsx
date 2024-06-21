import NoteCard from './NoteList/NoteCard';
import {useContext, useEffect, useState, useRef} from 'react';
import Fuse from 'fuse.js';
import './NoteList/NoteList.scss';
import {DataProvider} from '../context/Context';
import DeleteModel from './DeleteModel';
import {createPortal} from 'react-dom';
import ZoomUi from './ZoomUi';
import PlaceHolderCollection from './placeHolders/PlaceHolderCollection';
import {motion, AnimatePresence} from 'framer-motion';

const portalDom = document.getElementById('portal');

function NoteList() {
  const {notes, searchTerm, isFetchLoading} = useContext(DataProvider);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [idOfDeleteNote, setIdOfDeleteNote] = useState('');
  const [renderNotes, setRenderNotes] = useState(notes);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
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

  useEffect(() => {
    function checkTouchDevice() {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        setIsTouchDevice(true);
        return;
      }
      if (window.DocumentTouch && document instanceof DocumentTouch) {
        setIsTouchDevice(true);
        return;
      }
      if ('ontouchstart' in document.documentElement) {
        setIsTouchDevice(true);
        return;
      }
      setIsTouchDevice(false);
    }
    checkTouchDevice();
  }, []);

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
      {createPortal(
        <AnimatePresence>
          {isDeleteModelOpen && <DeleteModel key={idOfDeleteNote} idOfDeleteNote={idOfDeleteNote} setIsDeleteModelOpen={setIsDeleteModelOpen} />}
        </AnimatePresence>,
        portalDom
      )}

      {!isFetchLoading && renderNotes.length !== 0 && (
        <motion.div initial='hidden' animate='visible' variants={animation} className='note-list '>
          {renderNotes.map((note) => (
            <motion.div
              key={note.id}
              variants={noteCardVariants}
              transition={{ease: 'easeInOut', duration: 0.2}}
              drag={!isTouchDevice}
              dragSnapToOrigin='true'
              dragTransition={{bounceStiffness: 500, bounceDamping: 25}}
              dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
              dragElastic={0.4}>
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
