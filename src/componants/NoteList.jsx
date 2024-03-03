import { useState } from "react";
import NoteCard from "./NoteList/NoteCard";
import "./NoteList/NoteList.css";

function NoteList() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <div className="note-list">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}

export default NoteList;
