import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/RootReducer';
import Note from '../StickyNote/Sticky';
import { deleteNote } from '../../actions/Actions';
import AddNote from '../AddNote/AddNote';
import EditNote from '../EditNote/EditNote';

const colors = [
  'bg-bk-100',
  'bg-bk-200',
  'bg-bk-300',
  'bg-bk-400',
];
const NotesList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDeleteNote = (index: number) => {
    const savedNotes = localStorage.getItem('notes');
    const notes = savedNotes ? JSON.parse(savedNotes) : [];
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    dispatch(deleteNote(index));
    dispatch({ type: 'SET_NOTES', payload: updatedNotes });
  };

  const handleEditNote = (index: number) => {
    setEditIndex(index);
  };

  const handleCloseEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {notes.map((note, index) => (
        <div key={index} className={`col-span-1 ${colors[index % colors.length]} rounded-md w-62 h-74 p-2`}>
          {editIndex === index ? (
            <EditNote note={note} onClose={handleCloseEdit} />
          ) : (
            <Note
              title={note.title}
              description={note.description}
              onDelete={() => handleDeleteNote(index)}
              onEdit={() => handleEditNote(index)}
            />
          )}
        </div>
      ))}
      <AddNote />
    </div>
  );
};

export default NotesList;
