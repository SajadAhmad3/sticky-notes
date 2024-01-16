import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQdJ4K5sJWNRXZXltz1ROQPoqeHWTw5Eo",
  authDomain: "sticky-notes-b0fad.firebaseapp.com",
  projectId: "sticky-notes-b0fad",
  storageBucket: "sticky-notes-b0fad.appspot.com",
  messagingSenderId: "857335570792",
  appId: "1:857335570792:web:7a0d3d121edf15153936dd"
};


// Function to add a note for a specific user
const addNoteForUser = async (userId: string, title: string, description: string) => {
  try {
    const notesRef = collection(db, 'notes');
    await addDoc(notesRef, {
      userId,
      title,
      description,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Error adding note:', error);
  }
};

// Function to fetch notes for a specific user
const fetchNotesForUser = async (userId: string) => {
  try {
    const notesRef = collection(db, 'notes');
    const q = query(notesRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const notes: any[] = [];
    querySnapshot.forEach((doc) => {
      notes.push(doc.data());
    });
    return notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export {auth,db}
export { addNoteForUser, fetchNotesForUser };
export default app;
