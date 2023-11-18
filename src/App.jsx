import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const App = () => {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const noteReducer = (state, { type, payload }) => {
    switch (type) {
      case "ADDNOTE":
        return [...state, payload];
      case "DELETENOTE":
        return state.filter((note) => note.id !== payload);
      case "COMPLETENOTE":
        return state.map((note) =>
          note.id === payload ? { ...note, complete: !note.complete } : note
        );
      default:
        return state;
    }
  };
  const [notes, dispatch] = useReducer(noteReducer, []);
  const handleAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "ADDNOTE", payload: newNote });
  };
  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);
    dispatch({ type: "DELETENOTE", payload: id });
  };
  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, complete: !note.complete } : note
    // );
    // setNotes(newNotes);
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, complete: !note.complete } : note
    //   )
    // );
    dispatch({ type: "COMPLETENOTE", payload: noteId });
  };

  return (
    <div className="container">
      <div>
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
      </div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
            notes={notes}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
