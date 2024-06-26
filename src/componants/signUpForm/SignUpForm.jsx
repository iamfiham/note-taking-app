import { MdLockOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import "../signInForm/SignInForm.scss";
import useSignIn from "../../hooks/useSignIn";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUpForm() {
  const [isSignUpErrorOpen, setIsSignUpErrorOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordToolTipOpen, setIsPasswordToolTipOpen] = useState(false);
  const [isConfirmPasswordToolTipOpen, setIsConfirmPasswordToolTipOpen] =
    useState(false);
  const [isEmailToolTipOpen, setIsEmailToolTipOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoadBarOpen, setIsLoadBarOpen] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const { signUpWithEmail } = useSignIn();

  const navigate = useNavigate();

  const emailOnChange = (e) => {
    setEmail(e.target.value);
    setIsEmailToolTipOpen(false);
    setIsSignUpErrorOpen(false);
  };
  const passswordOnChange = (e) => {
    setIsPasswordToolTipOpen(false);
    setPassword(e.target.value);
    setIsSignUpErrorOpen(false);
  };
  const confirmPasswordOnChange = (e) => {
    setIsConfirmPasswordToolTipOpen(false);
    setConfirmPassword(e.target.value);
    setIsSignUpErrorOpen(false);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    if (password.length < 8) {
      return false;
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  const totalValidation = () => {
    setIsConfirmPasswordToolTipOpen(false);
    setIsPasswordToolTipOpen(false);
    setIsEmailToolTipOpen(false);
    let validation = true;
    let emailValidationResult = validateEmail(email.trim());
    let passwordValidationResult = validatePassword(password.trim());
    if (email.trim() == "" || !emailValidationResult) {
      setIsEmailToolTipOpen(true);
      validation = false;
    }
    if (password.trim() == "" || !passwordValidationResult) {
      setIsPasswordToolTipOpen(true);
      validation = false;
    }
    if (password !== confirmPassword) {
      setIsConfirmPasswordToolTipOpen(true);
      validation = false;
    }
    return validation;
  };

  const emailSignUp = async () => {
    setIsSignUpErrorOpen(false);
    let finalValidation = totalValidation();
    if (!finalValidation) {
      return;
    }
    setIsLoadBarOpen(true);
    setIsButtonDisabled(true);
    let { result, errorCode } = await signUpWithEmail(
      email.trim(),
      password.trim(),
    );
    setIsLoadBarOpen(false);
    setIsButtonDisabled(false);
    if (result) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/");
      return;
    }
    if (errorCode === "auth/email-already-in-use") {
      setErrorMassage(
        "This email is already in use. Please use another email.",
      );
    } else {
      setErrorMassage("An error occurred. Please try again later.");
    }
    setIsSignUpErrorOpen(true);
  };

  const animation = {
    visible: { opacity: 1, willChange: "opacity" },
    hidden: { opacity: 0, willChange: "opacity" },
    exit: { opacity: 0, willChange: "opacity", transition: { duration: 0.1 } },
  };
  const transitionSettings = { ease: "easeInOut", duration: 0.3 };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transitionSettings}
      variants={animation}
      className="sign-in-form"
    >
      {isLoadBarOpen && <div className="load-bar"></div>}
      <h2>Create Your Account</h2>
      <p className="sub-head">Create your account with email and password</p>

      <div className="input">
        <MdLockOutline className="icon" />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            emailOnChange(e);
          }}
        />
      </div>
      {isEmailToolTipOpen && (
        <p className="mb-1 text-xs text-red-600">- Enter a valid email</p>
      )}
      <div className="input">
        <MdOutlineMailOutline className="icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            passswordOnChange(e);
          }}
        />
      </div>
      {isPasswordToolTipOpen && (
        <p className="mb-1 text-xs text-red-600">
          - Password must be at least 8 characters long. <br />- Password must
          include at least one uppercase letter, one lowercase letter, and one
          digit.
        </p>
      )}
      <div className="input">
        <MdOutlineMailOutline className="icon" />
        <input
          type="password"
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChange={(e) => {
            confirmPasswordOnChange(e);
          }}
        />
      </div>
      {isConfirmPasswordToolTipOpen && (
        <p className="mb-1 text-xs text-red-600">- Passwords do not match.</p>
      )}

      <p className="forgot-password">Forgot Password?</p>
      <button
        className="login-button"
        onClick={emailSignUp}
        disabled={isButtonDisabled}
      >
        Sign Up
      </button>
      <p className="createAnAccount-text">
        Already have an account?
        <Link to="/sign-in">
          <span> Sign in here</span>
        </Link>
      </p>
      <p className={`error-msg ${isSignUpErrorOpen ? "show" : ""}`}>
        {errorMassage}
      </p>
    </motion.div>
  );
}
