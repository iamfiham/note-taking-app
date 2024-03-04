import NoteCard from "./NoteList/NoteCard";
import "./NoteList/NoteList.css";

function NoteList({ notes }) {
  return (
    <div>
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} id={note.id} heading={note.heading} note={note.note} date={note.date} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
