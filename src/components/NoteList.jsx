import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onComplete, sortBy }) => {
  let sortedNotes = notes;
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  }
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort((a, b) => a.complete - b.complete);
  }

  return (
    <div>
      {sortedNotes.map((note) => (
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
