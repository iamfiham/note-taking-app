import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';

function Home() {
  return (
    <div className='mt-16 sm:mt-28 flex flex-col items-center'>
      <h2 className='sm:text-6xl leading-[1.15] tracking-tight font-semibold text-neutral-800 text-center mb-6 text-3xl max-w-[700px]'>
        Effortless Note-Taking for a Productive Life
      </h2>
      <h3 className='sm:text-xl tracking-tight font-medium text-neutral-500 text-center mb-12 text-base max-w-[500px]'>
        Seamlessly capture, organize, and access your notes, ideas, and tasks anytime, anywhere, on any device.
      </h3>
      <Link to='/sign-in'>
        <button
          className=' font-medium border border-neutral-300 text-neutral-900 rounded-full py-2 pl-4 pr-3 border-solid text-base hover:bg-neutral-50 transition-all flex gap-2 items-center'
          title='Log In'>
          Get started
          <FiArrowRight className='stroke-neutral-500' />
        </button>
      </Link>
      <p className='text-xs text-neutral-500 text-center mt-3'>Sign up to access your notes anywhere, anytime.</p>
    </div>
  );
}

export default Home;
