import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';

import useStoreData from '../hooks/useStoreData';

import './CreateNote.scss';

function CreateNote() {
  const createNoteRef = useRef(null);
  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const {setNewFireStoreDoc} = useStoreData();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim() && !text.trim()) {
      return;
    }
    const uploadTitle = title.trim() ? title.trim() : 'Unknown';
    const uploadtext = text.trim();
    setIsButtonDisabled(true);
    const result = await setNewFireStoreDoc(uploadTitle, uploadtext);
    setIsButtonDisabled(false);
    result && navigate('/');
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
        <div className='buttons'>
          <button onSubmit={submit} disabled={isButtonDisabled}>
            Create note
          </button>
          <Link to='/'>
            <button className='back-button'>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
