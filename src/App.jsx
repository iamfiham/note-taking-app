import './App.css';
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom';
import NavBar from './componants/NavBar';
import {lazy, Suspense, useContext} from 'react';
import {DataProvider} from './context/Context';
import Loader from './componants/Loader/Loader';
const Home = lazy(() => import('./layouts/Home'));
const NoteList = lazy(() => import('./componants/NoteList'));
const EditNote = lazy(() => import('./componants/EditNote'));
const SignUpPage = lazy(() => import('./layouts/SignUpPage'));
const SignInForm = lazy(() => import('./componants/signInForm/SignInForm'));
const SignUpForm = lazy(() => import('./componants/signUpForm/SignUpForm'));
const CreateNote = lazy(() => import('./componants/CreateNote'));

function App() {
  const {isLogIn, authLoading} = useContext(DataProvider);
  if (authLoading) {
    return <Loader />;
  }

  return (
    <HashRouter>
      <div className='app'>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <div className='wrapper'>
            <Routes>
              <Route path='/' element={isLogIn ? <NoteList /> : <Navigate to='/home' />} />
              <Route path='/home' element={<Home />} />
              <Route path='/create' element={isLogIn ? <CreateNote /> : <Navigate to='/sign-in' />} />
              <Route
                path='/sign-in'
                element={
                  <SignUpPage>
                    <SignInForm />
                  </SignUpPage>
                }
              />
              <Route
                path='/sign-up'
                element={
                  <SignUpPage>
                    <SignUpForm />
                  </SignUpPage>
                }
              />
              <Route path='/edit/:id' element={isLogIn ? <EditNote /> : <Navigate to='/sign-in' />} />
              <Route path='*' element={<div className='text-3xl text-center font-bold py-12 px-4'>Error: Item not found</div>} />
            </Routes>
          </div>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;
