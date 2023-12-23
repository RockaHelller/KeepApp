import React, { useState } from 'react';

const Note = ({ text, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editedText);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '8px' }}>
      {isEditing ? (
        <div className='saving-area'>
          <textarea
            rows="3"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='editing-area'>
          <p>{text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Note;
