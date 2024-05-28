import {useState, useRef, useEffect} from 'react';
import './CreateNote.scss';
import {useNavigate} from 'react-router-dom';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import useLogics from '../logicsAndContext/Logics';

function CreateNote() {
  const createNoteRef = useRef(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const titleRef = useRef(null);
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
    <div className='create-note shadow-new' ref={createNoteRef}>
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

export default CreateNote;
