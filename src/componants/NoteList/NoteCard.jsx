import {Link} from 'react-router-dom';
import './NoteCard.scss';
import {RiDeleteBin4Line} from 'react-icons/ri';
import {LuFileEdit} from 'react-icons/lu';

import {useState} from 'react';

function NoteCard({id, heading, note, date, setIsDeleteModelOpen, setIdOfDeleteNote}) {
  return (
    <div className='border border-solid note-card shadow-new border-neutral-50'>
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
