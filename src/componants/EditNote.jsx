import {useRef} from 'react';
import {useContext} from 'react';
import {useEffect, useState} from 'react';

import gsap from 'gsap';
import {useNavigate, useParams, Link} from 'react-router-dom';

import {useGSAP} from '@gsap/react';

import useLogics from '../hooks/useLogics';
import {DataProvider} from '../context/Context';

import './CreateNote.scss';

function EditNote() {
  const {notes} = useContext(DataProvider);
  const editNoteRef = useRef(null);
  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  let {id} = useParams();
  const editnote = notes.find((note) => note.id === id);
  const {editNote} = useLogics();

  useGSAP(() => {
    gsap.fromTo(editNoteRef.current, {y: 5, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.inOut'});
  }, {});

  useEffect(() => {
    setTitle(editnote.heading);
    setText(editnote.note);
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.focus();
      }
    }, 0);
  }, []);

  if (!editnote) {
    return (
      <div className='error-div' style={{fontSize: '2rem', textAlign: 'center', fontWeight: '700', padding: '3rem 1rem'}}>
        Error: Item not found
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    if (!title && !text) {
      return;
    }
    editNote(id, title, text);
    navigate('/');
  };
  return (
    <div className='create-note' ref={editNoteRef}>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Title Here ...'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          ref={titleRef}
        />
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder='Text Here ...'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}></textarea>
        <div className='buttons'>
          <button onSubmit={submit}>Create note</button>
          <Link to='/'>
            <button className='back-button'>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditNote;
