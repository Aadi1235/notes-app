import React from 'react';

function NotesList({ notes, setEditingNote, deleteNote }) {
  if (notes.length === 0) return <p>No notes available.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {notes.map(note => (
        <li key={note._id} style={{ border: '1px solid #ccc', padding: 12, marginBottom: 8 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setEditingNote(note)} style={{ marginRight: 8 }}>Edit</button>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
