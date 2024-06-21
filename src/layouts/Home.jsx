import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import {motion} from 'framer-motion';

function Home() {
  const animation = {
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.15, duration: 0},
    },
    hidden: {
      opacity: 0,
    },
  };
  const noteCardVariants = {visible: {opacity: 1, y: 0, filter: 'blur(0px)'}, hidden: {opacity: 0, y: 25, filter: 'blur(1px)'}};

  const heading = ['Effortless', 'Note', 'Taking', 'for a', 'Productive', 'life'];

  return (
    <div className='mt-16 sm:mt-28 flex flex-col items-center'>
      <motion.h2
        initial='hidden'
        animate='visible'
        variants={animation}
        className='flex flex-wrap justify-center gap-2 sm:gap-4 sm:row-gap row-gap  sm:text-6xl sm:leading-[0.55]  tracking-tight font-semibold text-neutral-800 mb-6 text-5xl leading-[0.55] max-w-[700px]'>
        {heading.map((word, index) => (
          <span className='overflow-hidden  sm:pb-3  pb-2'>
            <motion.span key={index} variants={noteCardVariants} transition={{ease: 'easeOut', duration: 0.3}} className=' inline-block py-2 '>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      <motion.h3
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        transition={{ease: 'easeOut', duration: 0.3, delay: 0.9}}
        className='sm:text-xl tracking-tight font-medium text-neutral-500 text-center mb-12 text-lg max-w-[500px]'>
        Seamlessly capture, organize, and access your notes, ideas, and tasks anytime, anywhere, on any device.
      </motion.h3>
      <motion.div
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        transition={{ease: 'easeOut', duration: 0.3, delay: 1.2}}
        className='grid grid-cols-2 gap-4 justify-items-stretch'>
        <Link to='/sign-in'>
          <button className=' font-medium border border-neutral-300 text-neutral-900 rounded-full py-2 pl-4 pr-3 border-solid text-base hover:bg-neutral-50 transition-all flex gap-2 items-center'>
            Get started
            <FiArrowRight className='stroke-neutral-500' />
          </button>
        </Link>
        <Link to='/sign-up'>
          <button className=' font-medium border border-neutral-800 text-neutral-100 rounded-full py-2  text-center  border-solid text-base hover:bg-neutral-700 transition-all   bg-neutral-800 w-full'>
            Sign Up
          </button>
        </Link>
      </motion.div>
      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: 'easeOut', duration: 0.3, delay: 1.2}}
        className='text-xs text-neutral-500 text-center mt-3'>
        Sign up to access your notes anywhere, anytime.
      </motion.p>
    </div>
  );
}

export default Home;
