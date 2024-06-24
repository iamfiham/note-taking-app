import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import peeps from "../assets/peep-17.svg";

function Home() {
  const animation = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0 },
    },
    hidden: {
      opacity: 0,
    },
  };
  const noteCardVariants = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    hidden: { opacity: 0, y: 25, filter: "blur(1px)" },
  };

  const heading = [
    "Effortless",
    "Note",
    "Taking",
    "for a",
    "Productive",
    "life",
  ];

  return (
    // <div className="relative mt-16 flex flex-col items-center sm:mt-28">
    <div className="relative mt-16 flex flex-col items-center sm:mt-1">
      <img src={peeps} alt="A man" className="left-0 top-1/2 mb-8 w-56" />

      <motion.h2
        initial="hidden"
        animate="visible"
        variants={animation}
        className="sm:row-gap row-gap mb-6 flex max-w-[700px] flex-wrap justify-center gap-2 text-5xl font-semibold leading-[0.55] -tracking-[0.035em] text-neutral-800 sm:gap-3 sm:text-6xl sm:leading-[0.55]"
      >
        {heading.map((word, index) => (
          <span key={index} className="overflow-hidden pb-2 sm:pb-3">
            <motion.span
              variants={noteCardVariants}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="inline-block py-2"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.9 }}
        className="mb-12 max-w-[500px] text-center text-lg font-medium tracking-tight text-neutral-500 sm:text-xl"
      >
        Seamlessly capture, organize, and access your notes, ideas, and tasks
        anytime, anywhere, on any device.
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 1.2 }}
        className="grid grid-cols-2 justify-items-stretch gap-4"
      >
        <Link to="/sign-in">
          <button className="flex items-center gap-2 rounded-full border border-solid border-neutral-300 py-2 pl-4 pr-3 text-base font-medium text-neutral-900 transition-all hover:bg-neutral-50">
            Get started
            <FiArrowRight className="stroke-neutral-500" />
          </button>
        </Link>
        <Link to="/sign-up">
          <button className="w-full rounded-full border border-solid border-neutral-800 bg-neutral-800 py-2 text-center text-base font-medium text-neutral-100 transition-all hover:bg-neutral-700">
            Sign Up
          </button>
        </Link>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 1.2 }}
        className="mt-3 text-center text-xs text-neutral-500"
      >
        Sign up to access your notes anywhere, anytime.
      </motion.p>
    </div>
  );
}

export default Home;
