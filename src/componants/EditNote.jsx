import {useRef} from 'react';
import {useContext} from 'react';
import {useEffect, useState} from 'react';

import gsap from 'gsap';
import {useNavigate, useParams, Link} from 'react-router-dom';

import {useGSAP} from '@gsap/react';

import {DataProvider} from '../context/Context';

import './CreateNote.scss';
import useStoreData from '../hooks/useStoreData';

function EditNote() {
  const {notes} = useContext(DataProvider);
  const editNoteRef = useRef(null);
  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  let {id} = useParams();
  const editnote = notes.find((note) => note.id === id);
  const {editFirbaseDoc} = useStoreData();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useGSAP(() => {
    gsap.fromTo(editNoteRef.current, {y: 5, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.inOut'});
  }, {});

  useEffect(() => {
    setTitle(editnote.title);
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

  const submit = async (e) => {
    e.preventDefault();
    if (!title && !text) {
      return;
    }
    await editFirbaseDoc(id, title, text);
    navigate('/');
    setIsButtonDisabled(false);
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
          <button onSubmit={submit} disabled={isButtonDisabled}>
            Save Changes
          </button>
          <Link to='/'>
            <button className='back-button'>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditNote;
