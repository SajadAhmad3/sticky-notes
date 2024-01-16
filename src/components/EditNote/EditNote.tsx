import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../../actions/Actions';
import { Note } from '../../actions/noteType';
import TextInput from '../../elements/Input';
import Button from '../Button/Button';

interface EditNoteProps {
  note: Note;
  onClose: () => void;
}

const EditNote: React.FC<EditNoteProps> = ({ note, onClose }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [id] = useState(note.id);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    dispatch(editNote(id, title, description)); 

    const savedNotes = localStorage.getItem('notes');
    const notes = savedNotes ? JSON.parse(savedNotes) : [];

    const editedNoteIndex = notes.findIndex((n: Note) => n.id === id);

    if (editedNoteIndex !== -1) {

      notes[editedNoteIndex] = { id, title, description };

      localStorage.setItem('notes', JSON.stringify(notes));
    }

    onClose();
  };

  return (
    <div className="m-2 bg-transparent p-2 rounded-md ">
    <TextInput
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="mb-2 p-2 rounded-md border border-gray-400 w-full"
    />
    <TextInput
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      type='textarea'
      className="mb-2 p-2 rounded-md border border-gray-400 w-full resize-none"
    />
    <Button
      type='success'
      onClick={handleSaveEdit}
      className="rounded-md "
    >
      Save
    </Button>
    <Button
      type='warning'
     onClick={onClose} className="rounded-md">
      Cancel
    </Button>
  </div>

  );
};

export default EditNote;
