

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../actions/Actions";
import { nanoid } from "nanoid";
import TextInput from "../../elements/Input";
import Button from "../Button/Button";

const AddNote = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);

      dispatch({ type: "SET_NOTES", payload: parsedNotes });
    }
  }, [dispatch]);

  const handleSaveNote = () => {
    if (title && description) {
      const id = nanoid();
      dispatch(addNote(id, title, description));
      const savedNotes = localStorage.getItem("notes");
      const notes = savedNotes ? JSON.parse(savedNotes) : [];
      const updatedNotes = [...notes, { id, title, description }];

      localStorage.setItem("notes", JSON.stringify(updatedNotes));

      setTitle("");
      setDescription("");
      setShowForm(false);
    }
  };

  const handleCancelNote = () => {
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
   
    <div className="bg-bk-500  p-4 h-74 w-62 rounded-md flex justify-center relative">
      {!showForm ? (
         <div className="m-8 p-8">
        <Button type="grey" onClick={() => setShowForm(true)}>
          <span className="text-7xl">+</span>
        </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center flex-1">
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
          className="mb-14 p-2 rounded-md border border-gray-400 w-full resize-none"
    />
          <div className="flex justify-center absolute bottom-2 right-2">
            <Button
              type="success"
              onClick={handleSaveNote}
              className="rounded-md "
            >
              Save
            </Button>
            <Button
            type="warning"
              onClick={handleCancelNote} 
              className="rounded-md"
            >
              Cancel
            </Button>
          </div>
        </div>
        
      )}
    </div>
   
  );
};

export default AddNote;
