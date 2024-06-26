import { useContext } from "react";
import { DataProvider } from "../context/Context";
import useSignIn from "../hooks/useSignIn";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function SignUpPage({ children }) {
  const { isLogIn } = useContext(DataProvider);
  const { logOut } = useSignIn();
  const backButtonRoute = isLogIn ? "/" : "/home";

  return (
    <div className="sign-in-page relative grid place-items-center">
      <Link to={backButtonRoute} className="justify-self-start">
        <button className="group mb-8 flex items-center gap-1 text-base/none font-medium text-neutral-500">
          <IoIosArrowBack className="fill-neutral-400" />
          <span className="border-0 border-b border-solid border-transparent leading-tight transition-all group-hover:border-neutral-400">
            back
          </span>
        </button>
      </Link>
      {isLogIn ? (
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
            You Already log in
          </h2>
          <button
            className="login-button rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white"
            onClick={logOut}
          >
            Log out
          </button>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default SignUpPage;
