import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const deleteNoteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  const compeleteHandler = (e) => {
    const noteId = Number(e.target.value);
    console.log(noteId);
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        note.id === noteId ? { ...note, completed: !note.completed } : note;
      })
    );
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          note container
          <NoteList
            onDelete={deleteNoteHandler}
            onComplete={compeleteHandler}
            notes={notes}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
