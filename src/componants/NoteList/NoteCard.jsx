import { Link } from "react-router-dom";
import "./NoteCard.css";
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";

function NoteCard({ id, heading, note, date, color, setNotes }) {
  const deletenote = () => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="note-card" style={{ backgroundColor: `${color}` }}>
      <p className="date">{date}</p>
      <h4 className="note-heading">{heading}</h4>
      <p className="note-caption">{note}</p>
      <div className="icons">
        <Link to={`/edit/${id}`}>
          <span className="edit-icon icon">
            <TbEdit />
          </span>
        </Link>
        <span className="delete-icon icon" onClick={deletenote}>
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
}

export default NoteCard;
