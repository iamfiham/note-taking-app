import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataProvider } from "../context/Context";
import useStringManipulation from "../hooks/useStringManipulation";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { createPortal } from "react-dom";
import DeleteModel from "./DeleteModel";

const portalDom = document.getElementById("portal");

function ViewNote() {
  const { id } = useParams();
  const { notes, isLogIn } = useContext(DataProvider);
  const [viewedNote, setViewedNote] = useState(null);
  const { formatDate, formatNoteWithLineBreaks } = useStringManipulation();
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [idOfDeleteNote, setIdOfDeleteNote] = useState("");

  useEffect(() => {
    const foundNote = notes.find((note) => note.id === id);
    if (foundNote) {
      setViewedNote(() => foundNote);
    }
  }, [notes, id]);

  const animation = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0,
      },
    },
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };
  const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 5 },
  };
  const childTransition = { ease: "easeOut", duration: 0.3 };

  const backButtonRoute = isLogIn ? "/" : "/home";

  return viewedNote ? (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      className="mx-auto mb-16 max-w-[740px]"
    >
      <ul className="mb-8 flex items-center gap-2">
        <Link to={backButtonRoute}>
          <button className="group flex items-center gap-1 text-base/none font-medium text-neutral-500">
            <IoIosArrowBack className="fill-neutral-400" />
            <span className="border-0 border-b border-solid border-transparent leading-tight transition-all group-hover:border-neutral-400">
              back
            </span>
          </button>
        </Link>
        <Link to={`/edit/${id}`} className="ml-auto">
          <li
            className="cursor-pointer rounded-lg p-2 text-sm/none font-medium transition-all hover:bg-neutral-100"
            title="Edit Note"
          >
            <FiEdit2 className="stroke-neutral-400 text-base/none" />
          </li>
        </Link>
        <li
          onClick={() => {
            setIdOfDeleteNote(id);
            setIsDeleteModelOpen(true);
          }}
          className="cursor-pointer rounded-lg p-2 text-sm/none font-medium transition-all hover:bg-neutral-100"
          title="Delete Note"
        >
          <RiDeleteBin7Line className="fill-neutral-400 text-base/none" />
        </li>
      </ul>
      <motion.p
        variants={childVariants}
        transition={childTransition}
        className="mb-1 flex items-center gap-2 text-sm tracking-tight text-neutral-400"
      >
        Created At
        <span className="font-medium text-neutral-600">
          {formatDate(viewedNote.createdAt)}
        </span>
      </motion.p>
      <motion.p
        variants={childVariants}
        transition={childTransition}
        className="mb-8 flex items-center gap-2 text-sm tracking-tight text-neutral-400"
      >
        Last Modified
        <span className="font-medium text-neutral-600">
          {formatDate(viewedNote.lastModified)}
        </span>
      </motion.p>
      <motion.h2
        variants={childVariants}
        transition={childTransition}
        className="mb-8 text-[2.75rem]/[1.1] font-medium tracking-tighter text-neutral-800"
      >
        {viewedNote.title}
      </motion.h2>
      <motion.p
        variants={childVariants}
        transition={childTransition}
        className="whitespace-normal text-[17px] text-neutral-600"
      >
        {formatNoteWithLineBreaks(viewedNote.note).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </motion.p>
      {createPortal(
        <AnimatePresence>
          {isDeleteModelOpen && (
            <DeleteModel
              key={idOfDeleteNote}
              idOfDeleteNote={idOfDeleteNote}
              setIsDeleteModelOpen={setIsDeleteModelOpen}
            />
          )}
        </AnimatePresence>,
        portalDom,
      )}
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

export default ViewNote;
