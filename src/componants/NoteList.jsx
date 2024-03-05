import NoteCard from "./NoteList/NoteCard";
import "./NoteList/NoteList.css";
import { randomColor } from "randomcolor";

function NoteList({ notes, setNotes }) {
  return (
    <div>
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            heading={note.heading}
            note={note.note}
            date={note.date}
            setNotes={setNotes}
            color={randomColor({
              luminosity: "light",
              format: "rgba",
              alpha: 0.7,
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
