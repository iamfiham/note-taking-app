import './CreateNote.scss';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';
import useLogics from '../logicsAndContext/Logics';
import {useContext} from 'react';
import {DataProvider} from '../logicsAndContext/Context';

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
    <div className='create-note shadow-new' ref={editNoteRef}>
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
        <button onSubmit={submit}>Save</button>
      </form>
    </div>
  );
}

export default EditNote;
