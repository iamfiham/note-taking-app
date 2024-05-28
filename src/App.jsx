import './App.css';
import {Routes, Route, HashRouter} from 'react-router-dom';
import NoteList from './componants/NoteList';
import EditNote from './componants/EditNote';
import CreateNote from './componants/CreateNote';
import NavBar from './componants/NavBar';

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <NavBar />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<NoteList />} />
            <Route path='/create' element={<CreateNote />} />
            <Route path='/edit/:id' element={<EditNote />} />
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
