const NoteItem = ({ note, onDelete, onComplete }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>D</button>
          <input
            type="checkbox"
            name={note.id}
            checked={note.completed}
            value={note.id}
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
