import {useEffect, useRef, useState} from 'react';

import gsap from 'gsap';
import {useNavigate} from 'react-router-dom';

import {useGSAP} from '@gsap/react';

import useLogics from '../hooks/useLogics';

import './CreateNote.scss';

function CreateNote() {
  const createNoteRef = useRef(null);
  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const {newNote} = useLogics();

  useGSAP(() => {
    gsap.fromTo(createNoteRef.current, {y: 5, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.inOut'});
  }, {});

  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.focus();
      }
    }, 0);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() && !text.trim()) {
      return;
    }
    newNote(title, text);
    navigate('/');
  };

  return (
    <div className='create-note' ref={createNoteRef}>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Enter note title here'
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
          placeholder='Write your note here...'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}></textarea>
        <button onSubmit={submit}>Create note</button>
      </form>
    </div>
  );
}

export default CreateNote;
