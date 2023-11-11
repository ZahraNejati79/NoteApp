import { AiOutlineDelete } from "react-icons/ai";
const NoteItem = ({ note, onDelete, onComplete }) => {
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
          <button onClick={() => onDelete(note.id)}>
            <AiOutlineDelete className="delete-icon" />
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.complete}
            onChange={onComplete}
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
