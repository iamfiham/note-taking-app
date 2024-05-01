import {useState, useRef, useEffect} from 'react';
import './CreateNote.scss';
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

function CreateNote({setNotes}) {
  const createNoteRef = useRef(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const titleRef = useRef(null);

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
    const newNote = {
      id: uuid(),
      heading: title.trim() ? title.trim() : 'Unknown',
      note: text.trim(),
      date: new Date().toLocaleString(),
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
    navigate('/');
  };

  return (
    <div className='create-note' ref={createNoteRef}>
      <div className='dots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
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
