import NoteCard from "./NoteList/NoteCard";
import { useContext, useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import "./NoteList/NoteList.scss";
import { DataProvider } from "../context/Context";
import DeleteModel from "./DeleteModel";
import { createPortal } from "react-dom";
import ZoomUi from "./ZoomUi";
import PlaceHolderCollection from "./placeHolders/PlaceHolderCollection";
import { motion, AnimatePresence } from "framer-motion";
import useCalculation from "../hooks/useCalculation";

const portalDom = document.getElementById("portal");

function NoteList() {
  const { notes, searchTerm, isFetchLoading } = useContext(DataProvider);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [idOfDeleteNote, setIdOfDeleteNote] = useState("");
  const [renderNotes, setRenderNotes] = useState([]);
  const { isTouchDevice } = useCalculation();
  const debounceTimeout = useRef(null);

  const fuseOptions = {
    keys: ["title", "note"],
    threshold: 0.5,
    ignoreCase: true,
  };
  const fuse = new Fuse(notes, fuseOptions);

  useEffect(() => {
    const showingDataToUser = () => {
      if (isFetchLoading) {
        return;
      }
      if (searchTerm.trim() === "") {
        setRenderNotes(notes);
        return;
      }
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        setRenderNotes(() => {
          return fuse.search(searchTerm).map((result) => result.item);
        });
      }, 200);
    };
    showingDataToUser();
    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [searchTerm, isFetchLoading]);

  const instructions = {
    noNotes: {
      titleTip: "Start a New Note",
      subTitleTip: (
        <>
          No notes yet. Start writing, brand your notes <br /> will appear here
          for you to view and edit.
        </>
      ),
      needButton: true,
      buttonText: "Create note",
    },
    noResult: {
      titleTip: "No notes found",
      subTitleTip: (
        <>
          No notes match your search. Try different keywords <br /> or create a
          new note to get started.
        </>
      ),
      needButton: false,
      buttonText: "Clear search",
    },
  };
  const animation = {
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0 },
    },
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };
  const noteCardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 5 },
  };

  return (
    <div className="note-list-wrapper">
      {isFetchLoading ? (
        <PlaceHolderCollection />
      ) : renderNotes.length == 0 ? (
        searchTerm.trim() === "" ? (
          <ZoomUi {...instructions.noNotes} />
        ) : (
          <ZoomUi {...instructions.noResult} />
        )
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animation}
          className="note-list"
        >
          {renderNotes.map((note) => (
            <motion.div
              key={note.id}
              variants={noteCardVariants}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              drag={!isTouchDevice}
              dragSnapToOrigin="true"
              dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.3}
            >
              <NoteCard
                key={note.id}
                id={note.id}
                heading={note.title}
                note={note.note}
                date={note.createdAt}
                setIsDeleteModelOpen={setIsDeleteModelOpen}
                setIdOfDeleteNote={setIdOfDeleteNote}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
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
    </div>
  );
}

export default NoteList;
