import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import axios from './axios';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const fetchContacts = async () => {
    const res = await axios.get('/contacts');
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="App">
      <h1>Contact Saver</h1>
      <ContactForm fetchContacts={fetchContacts} editContact={editContact} setEditContact={setEditContact} />
      <ContactList contacts={contacts} fetchContacts={fetchContacts} setEditContact={setEditContact} />
      
      <footer className="footer">
      
        <p>Made with ❤️ by Coding Utsava </p> 
         </footer>
  </div>
);
    
}

export default App;
