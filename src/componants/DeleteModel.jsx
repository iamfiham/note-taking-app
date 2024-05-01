import {IoWarning} from 'react-icons/io5';

const DeleteModel = ({setIsDeleteModelOpen, deleteNote}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.35)] grid place-items-center'>
      <div className='flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg w-[320px]'>
        <IoWarning className='text-4xl fill-red-400' />
        <h2 className='text-base font-semibold leading-none '>Delete Note</h2>
        <h4 className='text-xs font-normal leading-[1.25] text-center text-neutral-500 mb-3'>
          Are you sure you want to delete this note? <br /> This action cannot be undone
        </h4>
        <div className='grid w-full grid-cols-2 gap-3 '>
          <button
            onClick={() => setIsDeleteModelOpen(false)}
            className='py-2 text-sm font-medium text-red-500 transition-all border border-red-300 border-solid rounded-md hover:bg-red-50 '>
            Cancel
          </button>
          <button
            onClick={deleteNote}
            className='py-2 text-sm font-medium text-white transition-all bg-red-400 rounded-md shadow-sm hover:bg-red-500'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
