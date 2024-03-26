import { Link } from "react-router-dom";
import "./NoteCard.scss";
import { RiDeleteBin4Line } from "react-icons/ri";
import { LuFileEdit } from "react-icons/lu";

function NoteCard({ id, heading, note, date, color, setNotes }) {
  const deletenote = () => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="note-card">
      <p className="date">{date}</p>
      <h4 className="note-heading">{heading}</h4>
      <p className="note-caption">{note}</p>
      <div className="icons">
        <Link to={`/edit/${id}`}>
          <span className="edit-icon icon">
            <LuFileEdit />
          </span>
        </Link>
        <span className="delete-icon icon" onClick={deletenote}>
          <RiDeleteBin4Line />
        </span>
      </div>
    </div>
  );
}

export default NoteCard;
