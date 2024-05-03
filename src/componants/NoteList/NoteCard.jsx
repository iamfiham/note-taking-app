import {Link} from 'react-router-dom';
import './NoteCard.scss';
import {RiDeleteBin4Line} from 'react-icons/ri';
import {LuFileEdit} from 'react-icons/lu';
import DeleteModel from '../DeleteModel';
const portalDom = document.getElementById('portal');
import {createPortal} from 'react-dom';
import {useState} from 'react';

function NoteCard({id, heading, note, date, deleteNote}) {
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  return (
    <div className='note-card'>
      {isDeleteModelOpen && createPortal(<DeleteModel id={id} deleteNote={deleteNote} setIsDeleteModelOpen={setIsDeleteModelOpen} />, portalDom)}
      <p className='date'>{date}</p>
      <h4 className='note-heading'>{heading}</h4>
      <p className='note-caption'>{note}</p>
      <div className='icons'>
        <Link to={`/edit/${id}`}>
          <span className='edit-icon icon'>
            <LuFileEdit />
          </span>
        </Link>
        <span className='delete-icon icon' onClick={() => setIsDeleteModelOpen(true)}>
          <RiDeleteBin4Line />
        </span>
      </div>
    </div>
  );
}

export default NoteCard;
