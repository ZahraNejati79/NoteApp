import { AiOutlineDelete } from "react-icons/ai";
import { useNotesDispatch } from "../context/NotesContext";
const NoteItem = ({ note }) => {
  const dispatch = useNotesDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.complete ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "DELETENOTE", payload: note.id })}
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.complete}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              return dispatch({ type: "COMPLETENOTE", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createAt).toDateString("en-US", options)}
      </div>
    </div>
  );
};

export default NoteItem;
