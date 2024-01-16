
 
import NoteRoute from './routes/NoteRoute';
import SignupRoute from './routes/SignupRoute';
import LoginRoute from './routes/LoginRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <SignupRoute />
        <LoginRoute />
        <NoteRoute />
    </BrowserRouter>
  );
}

export default App;
