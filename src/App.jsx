import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./componants/NavBar";
import { lazy, Suspense, useContext } from "react";
import { DataProvider } from "./context/Context";
import Loader from "./componants/Loader/Loader";
const Home = lazy(() => import("./layouts/Home"));
const NoteList = lazy(() => import("./componants/NoteList"));
const EditNote = lazy(() => import("./componants/EditNote"));
const SignUpPage = lazy(() => import("./layouts/SignUpPage"));
const SignInForm = lazy(() => import("./componants/signInForm/SignInForm"));
const SignUpForm = lazy(() => import("./componants/signUpForm/SignUpForm"));
const CreateNote = lazy(() => import("./componants/CreateNote"));
import ViewNotePlaceHolder from "./componants/placeHolders/ViewNotePlaceHolder";

import { AnimatePresence } from "framer-motion";
import ViewNote from "./componants/ViewNote";

function App() {
  const { isLogIn, authLoading, isFetchLoading } = useContext(DataProvider);
  const location = useLocation();

  return authLoading ? (
    <Loader />
  ) : (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <NavBar />
        <div className="wrapper">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={isLogIn ? <NoteList /> : <Navigate to="/home" />}
              />
              <Route path="/home" element={<Home />} />
              <Route
                path="/create"
                element={isLogIn ? <CreateNote /> : <Navigate to="/sign-in" />}
              />
              <Route
                path="/sign-in"
                element={
                  <SignUpPage>
                    <SignInForm />
                  </SignUpPage>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <SignUpPage>
                    <SignUpForm />
                  </SignUpPage>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  isLogIn ? (
                    isFetchLoading ? (
                      <Loader />
                    ) : (
                      <EditNote />
                    )
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="/view/:id"
                element={
                  isLogIn ? (
                    isFetchLoading ? (
                      <ViewNotePlaceHolder />
                    ) : (
                      <ViewNote />
                    )
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="*"
                element={
                  <div className="px-4 py-12 text-center text-3xl font-bold">
                    Error: Item not found
                  </div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
