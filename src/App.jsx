import React, { useState, useEffect } from 'react';
import NotesList from './components/NoteList.jsx';
import NoteForm from './components/NoteForm.jsx';
function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Fetch notes from backend
  useEffect(() => {
    fetch('/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(console.error);
  }, []);

  // Add a new note
  const addNote = (note) => {
    fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(newNote => setNotes([newNote, ...notes]))
    .catch(console.error);
  };

  // Update existing note
  const updateNote = (updatedNote) => {
    fetch(`/api/notes/${updatedNote._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNote)
    })
    .then(res => res.json())
    .then(data => {
      setNotes(notes.map(note => note._id === data._id ? data : note));
      setEditingNote(null);
    })
    .catch(console.error);
  };

  // Delete a note
  const deleteNote = (id) => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE'
    })
    .then(() => setNotes(notes.filter(note => note._id !== id)))
    .catch(console.error);
  };

  return (
    <div className="App" style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} editingNote={editingNote} updateNote={updateNote} />
      <NotesList notes={notes} setEditingNote={setEditingNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
