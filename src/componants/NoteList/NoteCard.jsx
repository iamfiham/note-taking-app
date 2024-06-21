import {Link} from 'react-router-dom';
import './NoteCard.scss';
import {RiDeleteBin4Line} from 'react-icons/ri';
import {LuFileEdit} from 'react-icons/lu';

function NoteCard({id, heading, note, date, setIsDeleteModelOpen, setIdOfDeleteNote}) {
  return (
    <div className='border border-solid  note-card bg-white  border-neutral-100 shadow-n1'>
      <h4 className='note-heading'>{heading}</h4>
      <p className='note-caption'>{note}</p>
      <div className='header'>
        <p className='date'>{date}</p>
        <div className='icons'>
          <Link to={`/edit/${id}`}>
            <span className='edit-icon icon'>
              <LuFileEdit />
            </span>
          </Link>
          <span
            className='delete-icon icon'
            onClick={() => {
              setIdOfDeleteNote(id);
              setIsDeleteModelOpen(true);
            }}>
            <RiDeleteBin4Line />
          </span>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
