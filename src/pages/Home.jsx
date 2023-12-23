import React, { useState } from 'react';
import Note from '../components/NOte';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index, newText) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newText;
    setNotes(updatedNotes);
  };

  return (
    <div className="keep-app">
      <h1>Keep App</h1>
      <div className="add-note-section">
        <textarea
          rows="3"
          placeholder="Take a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            text={note}
            onDelete={() => deleteNote(index)}
            onEdit={(newText) => editNote(index, newText)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

