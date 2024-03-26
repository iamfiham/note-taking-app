import "./CreateNote.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditNote({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  const editnote = notes.find((note) => note.id === id);

  useEffect(() => {
    setTitle(editnote.heading);
    setText(editnote.note);
  }, []);

  if (!editnote) {
    return (
      <div className="error-div" style={{ fontSize: "2rem", textAlign: "center", fontWeight: "700", padding: "3rem 1rem" }}>
        Error: Item not found
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();

    if (title || text) {
      setNotes((prevNotes) => {
        return prevNotes.map((item) => {
          if (item.id === id) {
            return { ...item, heading: title ? title : "unknown", note: text };
          }
          return item;
        });
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

export default EditNote;
