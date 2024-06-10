import './App.css';
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom';
import NoteList from './componants/NoteList';
import EditNote from './componants/EditNote';
import CreateNote from './componants/CreateNote';
import NavBar from './componants/NavBar';
import SignInPage from './layouts/SignInPage';
import {useContext} from 'react';
import {DataProvider} from './context/Context';

function App() {
  const {isLogIn} = useContext(DataProvider);

  return (
    <HashRouter>
      <div className='app'>
        <NavBar />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={isLogIn ? <NoteList /> : <Navigate to='/home' />} />
            <Route path='/home' element={<div>home</div>} />
            <Route path='/create' element={isLogIn ? <CreateNote /> : <Navigate to='/sign-in' />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/edit/:id' element={isLogIn ? <EditNote /> : <Navigate to='/sign-in' />} />
            <Route
              path='*'
              element={<div style={{fontSize: '2rem', textAlign: 'center', fontWeight: '700', padding: '3rem 1rem'}}>Error: Item not found</div>}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
