import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Note from '../pages/Notes';


const TodoRoute: React.FC = () => {

  return( 
    <Routes>
    <Route path="/Note" element={<Note />} />
  </Routes>
  );
};

export default TodoRoute;
