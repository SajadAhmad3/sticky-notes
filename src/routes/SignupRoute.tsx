import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';


const NoteRoute: React.FC = () => {

  return( 
  <Routes>
    <Route path="/Signup" element={<Signup />} />
  </Routes>
  );
};

export default NoteRoute;