
import { combineReducers } from 'redux';
import noteReducer from './Reducers';
import { Note } from '../actions/noteType';


export interface RootState {
  notes: Note[]; 
}

const rootReducer = combineReducers({
  notes: noteReducer,
});



export default rootReducer;