import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';


const TodoRoute: React.FC = () => {

  return( 
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
  );
};

export default TodoRoute;