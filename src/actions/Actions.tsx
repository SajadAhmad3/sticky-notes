
// import { ADD_NOTE, DELETE_NOTE ,EDIT_NOTE, SET_USER} from './Types';
// import { User } from './noteType';

// import { nanoid } from 'nanoid';


// export const addNote = (id: string, title: string, description: string) => {
//   return {
//     type: ADD_NOTE,
//     payload: { id, title, description },
//   };
// };


// export const deleteNote = (index: number) => {
//   return {
//     type: DELETE_NOTE,
//     payload: { index }, 
//   };
// };

// export const editNote = (id: string, title: string, description: string) => {
//   return {
//     type: EDIT_NOTE,
//     payload: {
//       id,
//       title,
//       description,
//     },
//   };
// };

// export const setUser = (user: User | null) => ({
//   type: SET_USER,
//   payload: user,
// });

import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SET_USER } from './Types';
import { User } from './noteType';

export const addNote = (id: string, title: string, description: string) => ({
  type: ADD_NOTE,
  payload: { id, title, description },
});

export const deleteNote = (index: number) => ({
  type: DELETE_NOTE,
  payload: { index },
});

export const editNote = (id: string, title: string, description: string) => ({
  type: EDIT_NOTE,
  payload: { id, title, description },
});

export const setUser = (user: User | null) => ({
  type: SET_USER,
  payload: user,
});
