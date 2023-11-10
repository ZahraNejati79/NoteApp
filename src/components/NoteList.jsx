import NoteItem from "./NoteItem";
const NoteList = ({ notes, onDelete, onComplete }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default NoteList;
