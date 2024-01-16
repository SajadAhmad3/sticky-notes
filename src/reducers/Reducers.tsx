// // src/reducers/Reducers.tsx
// import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/Types'; 
// import { Note } from '../actions/noteType';



// const initialState: Note[] = [];

// const noteReducer = (state = initialState, action: any) => {

//   switch (action.type) {
//     case ADD_NOTE:
//       return [...state, action.payload];

//       case EDIT_NOTE:
//         return state.map((note) =>
//           note.id === action.payload.id
//             ? { ...note, title: action.payload.title, description: action.payload.description }
//             : note
//         );

//     case DELETE_NOTE:
//       const { index } = action.payload;
//       return state.filter((_, i) => i !== index);
//     default:
//       return state;
//   }
// };



// export default noteReducer;


import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SET_NOTES } from '../actions/Types';

interface Note {
  id: string;
  title: string;
  description: string;
}

const initialState: Note[] = [];

const notesReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_NOTES:
      return action.payload;
    case ADD_NOTE:
      return [...state, action.payload];
    case EDIT_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, title: action.payload.title, description: action.payload.description }
          : note
      );
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

export default notesReducer;

