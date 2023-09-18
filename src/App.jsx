import "./App.css";
import AddNewNote from "./components/addNewNote";

const App = () => {
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">note container</div>
      </div>
    </div>
  );
};

export default App;
