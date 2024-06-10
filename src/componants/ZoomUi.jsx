import {BsFileEarmarkPlus} from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi';
import {FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';

function ZoomUi({titleTip, subTitleTip, needButton}) {
  return (
    <div className='p-12 flex flex-col items-center overflow-hidden justify-center rounded-xl '>
      <span className='pointer-events-none relative z-0 my-16'>
        {needButton ? (
          <BsFileEarmarkPlus className='relative z-30 stroke-neutral-900 text-4xl' />
        ) : (
          <FiSearch className='relative z-30 stroke-neutral-900 text-4xl' />
        )}
        <span className='absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0' />
        <span className='absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-700' />
        <span className='absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-1400' />
        <span className='absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-2100' />
        <span className='absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-2800' />
      </span>
      <h2 className='relative z-10 mb-3 text-base/none font-bold text-neutral-900'>{titleTip}</h2>
      <p className='relative z-10 mb-6 text-center text-sm/snug text-neutral-500'>{subTitleTip}</p>
      {needButton && (
        <Link to='/create'>
          <button className='relative z-10 flex  overflow-hidden rounded-lg border border-solid border-neutral-300 bg-white active:bg-neutral-50 '>
            <span className='truncate p-2 text-center text-sm/none font-medium text-neutral-900'>
              <FiPlus />
            </span>
            <p className='border-0 border-l  border-solid  border-neutral-200 p-2 text-center text-sm/none  text-neutral-500'>Create note</p>
          </button>
        </Link>
      )}
    </div>
  );
}

export default ZoomUi;
