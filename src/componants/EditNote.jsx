import { useRef } from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import { DataProvider } from "../context/Context";

import "./CreateNote.scss";
import useStoreData from "../hooks/useStoreData";
import { motion } from "framer-motion";

function EditNote() {
  const { notes } = useContext(DataProvider);
  const editNoteRef = useRef(null);
  const titleRef = useRef(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editnote, setEditnote] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  const { editFirbaseDoc } = useStoreData();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const foundNote = notes.find((note) => note.id === id);
    setEditnote(foundNote);
    if (foundNote) {
      setTitle(foundNote.title);
      setText(foundNote.note);
    }
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.focus();
      }
    }, 0);
    console.log("rendering");
  }, [notes, id]);

  const submit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    if (!title && !text) {
      return;
    }
    await editFirbaseDoc(id, title, text);
    setIsButtonDisabled(false);
    navigate(-1);
  };

  const backButton = () => {
    navigate(-1);
  };

  const animation = {
    visible: { opacity: 1, y: 0, willChange: "opacity, transform" },
    hidden: { opacity: 0, y: -5, willChange: "opacity, transform" },
    exit: {
      opacity: 0,
      y: -5,
      willChange: "opacity, transform",
      transition: { duration: 0.1 },
    },
  };
  const transitionSettings = { ease: "easeInOut", duration: 0.3 };

  return editnote ? (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transitionSettings}
      variants={animation}
      className="create-note"
      ref={editNoteRef}
    >
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Title Here ..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          ref={titleRef}
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
        <div className="buttons">
          <button onSubmit={submit} disabled={isButtonDisabled}>
            Save Changes
          </button>
          <button onClick={backButton} className="back-button" type="button">
            Back
          </button>
        </div>
      </form>
    </motion.div>
  ) : (
    <div
      className="error-div"
      style={{
        fontSize: "2rem",
        textAlign: "center",
        fontWeight: "700",
        padding: "3rem 1rem",
      }}
    >
      Error: Item not found
    </div>
  );
}

export default EditNote;
