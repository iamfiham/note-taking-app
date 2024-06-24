import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";

function NoteCard({
  id,
  heading,
  note,
  date,
  setIsDeleteModelOpen,
  setIdOfDeleteNote,
}) {
  const [isToolBarOpen, setIsToolBarOpen] = useState(false);
  const toolBar = useRef(null);

  const animation = {
    visible: { opacity: 1, scale: 1, willChange: "opacity, transform" },
    initial: { opacity: 0, scale: 0.8, willChange: "opacity, transform" },
    exit: {
      opacity: 0,
      scale: 0.8,
      willChange: "opacity, transform",
      transition: { duration: 0.1 },
    },
  };
  const transitionSettings = { ease: "easeOut", duration: 0.2 };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolBar.current && !toolBar.current.contains(e.target)) {
        setIsToolBarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex h-full min-h-[330px] cursor-pointer flex-col items-start rounded-md border border-solid border-neutral-100 bg-white p-8 shadow-n1 transition-all">
      <div className="relative mb-2 flex w-full items-start justify-between">
        <p className="rounded-2xl text-sm text-neutral-400">{date}</p>
        <span
          onClick={() => {
            setIsToolBarOpen(true);
          }}
          className="-translate-y-2 translate-x-2 cursor-pointer rounded-md p-2 text-base/none transition-all hover:bg-neutral-100"
        >
          <BsThreeDotsVertical className="block fill-neutral-500 text-base" />
        </span>
        <AnimatePresence>
          {isToolBarOpen && (
            <motion.ul
              initial="initial"
              animate="visible"
              exit="exit"
              transition={transitionSettings}
              variants={animation}
              className="shadow-tooltip absolute right-0 top-0 origin-top-right rounded-md border border-solid border-neutral-200 bg-white p-1"
              ref={toolBar}
            >
              <Link to={`/view/${id}`}>
                <li
                  onClick={() => {
                    setIsToolBarOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded p-2 pl-3 pr-4 text-sm/none font-medium text-neutral-500 transition-all hover:bg-neutral-100"
                >
                  <HiOutlineBookOpen className="stroke-neutral-400 text-base/none" />
                  View Note
                </li>
              </Link>
              <Link to={`/edit/${id}`}>
                <li
                  onClick={() => {
                    setIsToolBarOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded p-2 pl-3 pr-4 text-sm/none font-medium text-neutral-500 transition-all hover:bg-neutral-100"
                >
                  <FiEdit2 className="stroke-neutral-400 text-base/none" />
                  Edit
                </li>
              </Link>
              <li
                onClick={() => {
                  setIdOfDeleteNote(id);
                  setIsToolBarOpen(false);
                  setIsDeleteModelOpen(true);
                }}
                className="flex cursor-pointer items-center gap-2 rounded p-2 pl-3 pr-4 text-sm/none font-medium text-neutral-500 transition-all hover:bg-neutral-100"
              >
                <RiDeleteBin7Line className="fill-neutral-400 text-base/none" />
                Delete
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <h4 className="word-break mb-6 line-clamp-2 overflow-hidden text-xl/[1.3] font-semibold tracking-tight">
        {heading}
      </h4>
      <p className="word-break line-clamp-6 w-full text-base text-neutral-600">
        {note}
      </p>
    </div>
  );
}

export default NoteCard;
