import {LuFolder} from 'react-icons/lu';
import {LuLogOut} from 'react-icons/lu';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function ProfilePopup({componentStyle, displayName, email, logOut, setIsProfileOpen, photoURL}) {
  const logOutAccount = async () => {
    await logOut();
    setIsProfileOpen(false);
  };

  const animation = {
    visible: {opacity: 1, y: 0, scale: 1, willChange: 'opacity, transform'},
    hidden: {opacity: 0, y: -6, scale: 0.98, willChange: 'opacity, transform'},
  };
  const transitionSettings = {ease: 'easeOut', duration: 0.2};

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={transitionSettings}
      variants={animation}
      className={` ${componentStyle} w-64 bg-white rounded-lg p-2 shadow-n2 border border-solid border-neutral-100 origin-top`}>
      <div className='flex gap-4 items-center border-0 border-b border-gray-200 border-solid p-2 mb-2'>
        <div className='relative'>
          <img src={photoURL} alt='Profile' className='w-9 h-9 rounded-full object-cover' />
          <span className='absolute -bottom-[2px] -right-[2px] flex h-3 w-3'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-full w-full border-2 border-white border-solid bg-sky-500'></span>
          </span>
        </div>
        <div className='flex flex-col gap-[2px]'>
          <h2 className='font-medium text-neutral-800 text-base/none truncate'>{displayName}</h2>
          <h4 className='font-normal text-neutral-400 text-sm/none truncate  py-1 tracking-wide'>{email}</h4>
        </div>
      </div>
      <Link to='/'>
        <button className='flex gap-3 items-center font-normal p-2  rounded-md  text-neutral-500  text-sm/none hover:bg-sky-50 w-full transition-all'>
          <LuFolder className=' stroke-neutral-500 ' />
          All Notes
        </button>
      </Link>
      <button
        className='flex gap-3 items-center font-normal  p-2  rounded-md  text-neutral-500 text-sm/none  hover:bg-sky-50 w-full transition-all '
        onClick={logOutAccount}>
        <LuLogOut className='stroke-neutral-500' />
        Log out
      </button>
    </motion.div>
  );
}

export default ProfilePopup;
