import { useState } from "react";
import "./CreateNote.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (title || text) {
      const newNote = {
        id: uuid(),
        heading: title ? title : "unknown",
        note: text,
        date: new Date().toLocaleString(),
      };
      setNotes((prev) => {
        return [newNote, ...prev];
      });
      navigate("/");
    }
  };
  return (
    <div className="create-note">
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
