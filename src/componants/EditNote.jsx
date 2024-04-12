import "./CreateNote.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function EditNote({ notes, setNotes }) {
  const editNoteRef = useRef(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  const editnote = notes.find((note) => note.id === id);

  useGSAP(() => {
    gsap.fromTo(
      editNoteRef.current,
      { y: 5, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.inOut" }
    );
  }, {});

  useEffect(() => {
    setTitle(editnote.heading);
    setText(editnote.note);
  }, []);

  if (!editnote) {
    return (
      <div
        className="error-div"
        style={{ fontSize: "2rem", textAlign: "center", fontWeight: "700", padding: "3rem 1rem" }}
      >
        Error: Item not found
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    if (!title && !text) {
      return;
    }

    setNotes((prevNotes) => {
      return prevNotes.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, heading: title.trim() ? title.trim() : "Unknown", note: text.trim() };
      });
    });
    navigate("/");
  };
  return (
    <div className="create-note" ref={editNoteRef}>
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

export default EditNote;
