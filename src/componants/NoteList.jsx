import SearchBar from "./NavBar/SearchBar";
import NoteCard from "./NoteList/NoteCard";
import "./NoteList/NoteList.scss";

function NoteList({ notes, setNotes }) {
  return (
    <div>
      <SearchBar />
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} id={note.id} heading={note.heading} note={note.note} date={note.date} setNotes={setNotes} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
