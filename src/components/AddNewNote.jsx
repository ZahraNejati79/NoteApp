import { useState } from "react";

const AddNewNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title && !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form onSubmit={submitHandler} className="note-form">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="text-field"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="text-field"
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
};

export default AddNewNote;
