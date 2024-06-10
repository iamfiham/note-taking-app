import {RiDeleteBinLine} from 'react-icons/ri';
import useLogics from '../hooks/useLogics';

const DeleteModel = ({idOfDeleteNote, setIsDeleteModelOpen}) => {
  const {deleteNote} = useLogics();

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.35)] grid place-items-center z-[200]'>
      <div className='flex flex-col items-center p-6 bg-neutral-50 rounded-lg shadow-lg w-[300px] border border-solid border-neutral-200'>
        <RiDeleteBinLine className='my-6 text-5xl fill-red-400' />
        <h2 className='mb-3 text-base font-semibold leading-none'>Delete Note</h2>
        <h4 className='text-xs font-normal leading-[1.25] text-center text-neutral-400 mb-6'>
          Are you sure you want to delete this note? <br /> This action cannot be undone
        </h4>
        <div className='grid w-full gap-2'>
          <button
            onClick={() => {
              deleteNote(idOfDeleteNote);
              setIsDeleteModelOpen(false);
            }}
            className='py-[0.5em] text-sm font-medium text-white transition-all bg-neutral-800 rounded-full shadow-sm hover:bg-neutral-900'>
            Remove
          </button>
          <button
            onClick={() => setIsDeleteModelOpen(false)}
            className='py-[0.5em] text-sm font-medium text-neutral-800 transition-all border bg-transparent border-neutral-300 border-solid rounded-full hover:bg-neutral-100 '>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
