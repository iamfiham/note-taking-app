import SearchBar from "./NavBar/SearchBar";
import NoteCard from "./NoteList/NoteCard";
import { useState } from "react";
import Fuse from "fuse.js";
import "./NoteList/NoteList.scss";

function NoteList({ notes, setNotes }) {
  const [searchTerm, setSearchTerm] = useState("");

  const fuseOptions = {
    keys: ["heading", "note"],
    threshold: 0.5,
    ignoreCase: true,
  };

  const fuse = new Fuse(notes, fuseOptions);
  const searchResults = searchTerm === "" ? notes : fuse.search(searchTerm).map((result) => result.item);

  return (
    <div className="note-list-wrapper">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="note-list">
        {searchResults.map((note) => (
          <NoteCard key={note.id} id={note.id} heading={note.heading} note={note.note} date={note.date} setNotes={setNotes} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
