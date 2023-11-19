import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext(null);
const NoteDispatchContext = createContext(null);

const noteReducer = (notes, { type, payload }) => {
  switch (type) {
    case "ADDNOTE":
      return [...notes, payload];
    case "DELETENOTE":
      return notes.filter((note) => note.id !== payload);
    case "COMPLETENOTE":
      return notes.map((note) =>
        note.id === payload ? { ...note, complete: !note.complete } : note
      );
    default:
      return notes;
  }
};

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);
  return (
    <NoteContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}

export function useNotesDispatch() {
  return useContext(NoteDispatchContext);
}
