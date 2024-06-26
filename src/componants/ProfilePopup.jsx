import { LuFolder } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProfilePopup({
  componentStyle,
  displayName,
  email,
  logOut,
  setIsProfileOpen,
  photoURL,
}) {
  const logOutAccount = async () => {
    await logOut();
    setIsProfileOpen(false);
  };

  const animation = {
    visible: { opacity: 1, y: 0, scale: 1, willChange: "opacity, transform" },
    hidden: {
      opacity: 0,
      y: -6,
      scale: 0.98,
      willChange: "opacity, transform",
    },
  };
  const transitionSettings = { ease: "easeOut", duration: 0.2 };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={transitionSettings}
      variants={animation}
      className={`${componentStyle} min-w-52 max-w-64 origin-top rounded-lg border border-solid border-neutral-100 bg-white p-2 shadow-n2`}
    >
      <div className="mb-2 flex items-center gap-3 border-0 border-b border-solid border-gray-200 p-2">
        <div className="relative">
          <img
            src={photoURL}
            alt="Profile"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="absolute -bottom-[2px] -right-[2px] flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full border-2 border-solid border-white bg-sky-500"></span>
          </span>
        </div>
        <div className="mr-2 flex flex-col gap-[2px]">
          <h2 className="truncate text-base/none font-semibold text-neutral-800">
            {displayName}
          </h2>
          <h4 className="truncate py-1 text-sm/none tracking-wide text-neutral-400">
            {email}
          </h4>
        </div>
      </div>
      <Link to="/">
        <button
          className="flex w-full items-center gap-3 rounded-md p-2 text-[0.9rem]/none text-neutral-500 transition-all hover:bg-sky-50/50"
          onClick={() => {
            setIsProfileOpen(false);
          }}
        >
          <LuFolder className="stroke-neutral-500" />
          All Notes
        </button>
      </Link>
      <button
        className="flex w-full items-center gap-3 rounded-md p-2 text-[0.9rem]/none text-neutral-500 transition-all hover:bg-sky-50/50"
        onClick={logOutAccount}
      >
        <LuLogOut className="stroke-neutral-500" />
        Log out
      </button>
    </motion.div>
  );
}

export default ProfilePopup;
