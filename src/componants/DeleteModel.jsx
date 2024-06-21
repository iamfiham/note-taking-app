import {RiDeleteBinLine} from 'react-icons/ri';
import useStoreData from '../hooks/useStoreData';
import {useState} from 'react';
import {motion} from 'framer-motion';

const DeleteModel = ({idOfDeleteNote, setIsDeleteModelOpen}) => {
  const {deleteFireStoreDoc} = useStoreData();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const deleteNote = async () => {
    setIsButtonDisabled(true);
    await deleteFireStoreDoc(idOfDeleteNote);
    setIsDeleteModelOpen(false);
    setIsButtonDisabled(false);
  };

  const bgAnimation = {
    visible: {opacity: 1, willChange: 'opacity'},
    hidden: {opacity: 0, willChange: 'opacity'},
  };
  const cardAnimation = {
    visible: {opacity: 1, scale: 1, willChange: 'opacity, transform'},
    hidden: {opacity: 0, scale: 0.98, willChange: 'opacity, transform'},
  };
  const bgTransitionSettings = {ease: 'easeOut', duration: 0.2};
  const cardTransitionSettings = {ease: 'easeOut', duration: 0.25};

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={bgTransitionSettings}
      variants={bgAnimation}
      className='fixed top-0 left-0 w-full h-full bg-black/50 grid place-items-center z-[200]'>
      <motion.div
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={cardTransitionSettings}
        variants={cardAnimation}
        className='flex flex-col items-center p-6 bg-neutral-50 rounded-lg shadow-lg w-[300px] border border-solid border-neutral-200 origin-top'>
        <RiDeleteBinLine className='my-6 text-5xl fill-red-400' />
        <h2 className='mb-3 text-base font-semibold leading-none'>Delete Note</h2>
        <h4 className='text-xs font-normal leading-[1.25] text-center text-neutral-400 mb-6'>
          Are you sure you want to delete this note? <br /> This action cannot be undone
        </h4>
        <div className='grid w-full gap-2'>
          <button
            onClick={deleteNote}
            disabled={isButtonDisabled}
            className='py-[0.5em] text-sm font-medium text-white transition-all bg-neutral-800 rounded-full shadow-sm hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50'>
            Remove
          </button>
          <button
            onClick={() => setIsDeleteModelOpen(false)}
            className='py-[0.5em] text-sm font-medium text-neutral-800 transition-all border bg-transparent border-neutral-300 border-solid rounded-full hover:bg-neutral-100 '>
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteModel;
