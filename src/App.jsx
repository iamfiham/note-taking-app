import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./componants/NoteList";
import EditNote from "./componants/EditNote";
import CreateNote from "./componants/CreateNote";
import NavBar from "./componants/NavBar";
import DummyData from "./componants/DummyData";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("Notes")) || []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<NoteList notes={notes} setNotes={setNotes} />} />
            <Route path="/create" element={<CreateNote setNotes={setNotes} />} />
            <Route path="/edit/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
            <Route
              path="*"
              element={
                <div className="error-div" style={{ fontSize: "2rem", textAlign: "center", fontWeight: "700", padding: "3rem 1rem" }}>
                  Error: Item not found
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
