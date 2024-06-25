import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./NavBar/SearchBar";
import { useContext, useEffect, useState } from "react";
import profilePic from "../assets/DummyUser.jpg";
import ProfilePopup from "./ProfilePopup";

import { DataProvider } from "../context/Context";
import { auth } from "../config/FireBaseConfig";
import useSignIn from "../hooks/useSignIn";

import { AnimatePresence } from "framer-motion";

function NavBar() {
  const location = useLocation();
  const [hasBoxShadow, setHasBoxShadow] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isLogIn } = useContext(DataProvider);
  const { logOut } = useSignIn();

  const user = auth.currentUser;

  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasBoxShadow(true);
        return;
      }
      setHasBoxShadow(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${hasBoxShadow && "shadow-n1"} sticky top-0 z-[99] border-0 border-b border-solid border-neutral-100 bg-white transition-all`}
      >
        <div className="relative mx-auto flex w-[min(1280px,_92%)] items-center justify-between gap-4 bg-white py-3">
          <AnimatePresence>
            {isLogIn && isProfileOpen && (
              <ProfilePopup
                componentStyle="absolute right-0 top-16"
                displayName={displayName ? displayName : "Unknown User"}
                email={email}
                logOut={logOut}
                setIsProfileOpen={setIsProfileOpen}
                photoURL={photoURL ? photoURL : profilePic}
              />
            )}
          </AnimatePresence>

          <Link to="/">
            <h2 className="flex cursor-pointer items-center gap-1 p-[0.2rem] text-2xl font-semibold tracking-[-1.25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="fill-black"
              >
                <path
                  fill="black"
                  d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35z"
                />
              </svg>
              note.
            </h2>
          </Link>
          {location.pathname === "/" && (
            <span className="hidden w-[350px] sm:block">
              <SearchBar />
            </span>
          )}

          {isLogIn && location.pathname === "/" && (
            <Link
              to="/create"
              className="fixed bottom-8 right-8 sm:bottom-16 sm:right-16"
            >
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-neutral-900 py-3 pl-4 pr-6 text-sm font-medium text-neutral-100 transition-all hover:bg-neutral-800">
                <FaPlus className="inline-block fill-neutral-100 text-base/none" />
                New note
              </button>
            </Link>
          )}

          {isLogIn ? (
            <img
              src={photoURL ? photoURL : profilePic}
              alt=""
              className="aspect-square w-8 origin-[right_center] cursor-pointer rounded-full object-cover"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
          ) : (
            <div className="flex gap-2">
              <Link to="/sign-in">
                <button className="rounded-full border border-solid border-neutral-300 px-[1.2em] py-[0.5em] text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-50">
                  Log In
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="rounded-full border border-solid border-neutral-800 bg-neutral-800 px-[1.2em] py-[0.5em] text-sm font-medium text-neutral-100 transition-all hover:border-neutral-700 hover:bg-neutral-700">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {location.pathname === "/" && (
        <span className="mx-auto block w-full px-4 pb-0 pt-4 sm:hidden">
          <SearchBar />
        </span>
      )}
    </>
  );
}

export default NavBar;
