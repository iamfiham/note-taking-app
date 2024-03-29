import { useState } from "react";
import "./CreateNote.scss";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() && !text.trim()) {
      return;
    }
    const newNote = {
      id: uuid(),
      heading: title.trim() ? title.trim() : "Unknown",
      note: text.trim(),
      date: new Date().toLocaleString(),
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
    navigate("/");
  };
  return (
    <div className="create-note">
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Title Here ..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Text Here ..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button onSubmit={submit}>Save</button>
      </form>
    </div>
  );
}

export default CreateNote;
