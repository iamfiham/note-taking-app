import { RiDeleteBinLine } from "react-icons/ri";
import useStoreData from "../hooks/useStoreData";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DeleteModel = ({ idOfDeleteNote, setIsDeleteModelOpen }) => {
  const { deleteFireStoreDoc } = useStoreData();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const deleteNote = async () => {
    setIsButtonDisabled(true);
    const result = await deleteFireStoreDoc(idOfDeleteNote);
    setIsDeleteModelOpen(false);
    setIsButtonDisabled(false);
    if (result) {
      navigate("/");
    }
  };

  const bgAnimation = {
    visible: { opacity: 1, willChange: "opacity" },
    hidden: { opacity: 0, willChange: "opacity" },
  };
  const cardAnimation = {
    visible: { opacity: 1, scale: 1, willChange: "opacity, transform" },
    hidden: { opacity: 0, scale: 0.98, willChange: "opacity, transform" },
  };
  const bgTransitionSettings = { ease: "easeOut", duration: 0.2 };
  const cardTransitionSettings = { ease: "easeOut", duration: 0.25 };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={bgTransitionSettings}
      variants={bgAnimation}
      className="fixed left-0 top-0 z-[200] grid h-full w-full place-items-center bg-black/50"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={cardTransitionSettings}
        variants={cardAnimation}
        className="flex w-[300px] origin-top flex-col items-center rounded-lg border border-solid border-neutral-200 bg-neutral-50 p-6 shadow-lg"
      >
        <RiDeleteBinLine className="my-6 fill-red-400 text-5xl" />
        <h2 className="mb-3 text-base font-semibold leading-none">
          Delete Note
        </h2>
        <h4 className="mb-6 text-center text-xs font-normal leading-[1.25] text-neutral-400">
          Are you sure you want to delete this note? <br /> This action cannot
          be undone
        </h4>
        <div className="grid w-full gap-2">
          <button
            onClick={deleteNote}
            disabled={isButtonDisabled}
            className="rounded-full bg-neutral-800 py-[0.5em] text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Remove
          </button>
          <button
            onClick={() => setIsDeleteModelOpen(false)}
            className="rounded-full border border-solid border-neutral-300 bg-transparent py-[0.5em] text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-100"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteModel;
