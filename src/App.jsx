import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./componants/NoteList";
import EditNote from "./componants/EditNote";
import CreateNote from "./componants/CreateNote";
import NavBar from "./componants/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
