import {AiOutlineLogout, AiOutlineUser} from 'react-icons/ai';

function ProfilePopup({componentStyle, displayName, email, logOut, setIsProfileOpen, photoURL}) {
  const logOutAccount = async () => {
    await logOut();
    setIsProfileOpen(false);
  };

  return (
    <div className={` ${componentStyle} w-64 bg-white rounded-lg p-2  shadow-n2 border border-solid border-neutral-100`}>
      <div className='flex gap-3 items-center border-0 border-b border-gray-200 border-solid pb-3 mb-2'>
        <div className='relative'>
          <img src={photoURL} alt='Profile' className='w-9 h-9 rounded-full object-cover' />
          <span className='absolute -bottom-[2px] -right-[2px] flex h-3 w-3'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-full w-full border-2 border-white border-solid bg-sky-500'></span>
          </span>
        </div>
        <div className='flex flex-col gap-[2px]'>
          <h2 className='font-semibold text-gray-800 text-base leading-none truncate'>{displayName}</h2>
          <h4 className='font-normal text-gray-400 text-sm leading-none truncate py-1 '>{email}</h4>
        </div>
      </div>
      {/* <button className='flex gap-2 items-center p-2 rounded-md font-normal text-gray-600 text-sm leading-none hover:bg-sky-50 w-full transition-all'>
        <AiOutlineUser className=' text-gray-600 scale-110' />
        Profile
      </button> */}
      <button
        className='flex gap-2 items-center  p-2 rounded-md font-normal text-neutral-500 text-sm leading-none hover:bg-sky-50 w-full transition-all '
        onClick={logOutAccount}>
        <AiOutlineLogout className='fill-neutral-500' />
        Log out
      </button>
    </div>
  );
}

export default ProfilePopup;
