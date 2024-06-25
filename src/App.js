import React, { useState, useEffect } from 'react';
import './App.css'; // Importa el CSS aquí
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [editContactIndex, setEditContactIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    if (editContactIndex !== null) {
      const updatedContacts = contacts.map((c, i) => 
        i === editContactIndex ? contact : c
      );
      setContacts(updatedContacts);
      setEditContactIndex(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const editContact = (index) => {
    setEditContactIndex(index);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Gestión de Contactos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ContactForm 
        addContact={addContact} 
        contact={editContactIndex !== null ? contacts[editContactIndex] : null}
      />
      <ContactList 
        contacts={filteredContacts} 
        deleteContact={deleteContact} 
        editContact={editContact}
      />
    </div>
  );
}

export default App;
