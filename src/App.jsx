import './App.css';
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom';
import NoteList from './componants/NoteList';
import EditNote from './componants/EditNote';
import CreateNote from './componants/CreateNote';
import NavBar from './componants/NavBar';
import SignInPage from './layouts/SignInPage';
import {useContext} from 'react';
import {DataProvider} from './context/Context';
import Loader from './componants/Loader/Loader';
import Home from './layouts/Home';

function App() {
  const {isLogIn, authLoading} = useContext(DataProvider);
  if (authLoading) {
    return <Loader />;
  }

  return (
    <HashRouter>
      <div className='app'>
        <NavBar />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={isLogIn ? <NoteList /> : <Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={isLogIn ? <CreateNote /> : <Navigate to='/sign-in' />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/edit/:id' element={isLogIn ? <EditNote /> : <Navigate to='/sign-in' />} />
            <Route path='*' element={<div className='text-3xl text-center font-bold py-12 px-4'>Error: Item not found</div>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
