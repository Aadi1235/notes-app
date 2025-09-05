import React, { useState, useEffect } from 'react';

function NoteForm({ addNote, editingNote, updateNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      updateNote({ ...editingNote, title, content });
    } else {
      addNote({ title, content });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        style={{ width: '100%', height: 100, padding: 8, marginBottom: 8 }}
      />
      <button type="submit" style={{ padding: 10 }}>
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
}

export default NoteForm;
