import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

const App = () => {
  const [sortBy, setSortBy] = useState("");

  return (
    <NotesProvider>
      <div className="container">
        <div>
          <NoteHeader
            sortBy={sortBy}
            onSort={(e) => setSortBy(e.target.value)}
          />
        </div>
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default App;
