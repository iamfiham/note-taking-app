import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataProvider } from "../context/Context";
import useStringManipulation from "../hooks/useStringManipulation";
import { motion } from "framer-motion";

function ViewNote() {
  const { id } = useParams();
  const { notes } = useContext(DataProvider);
  const [viewedNote, setViewedNote] = useState(null);
  const { formatDate, formatNoteWithLineBreaks } = useStringManipulation();

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

  return viewedNote ? (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      className="mx-auto mb-16 max-w-[740px]"
    >
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
