import React from 'react';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} ({contact.email})
          <div>
            <button className="edit-button" onClick={() => editContact(index)}>Editar</button>
            <button className="delete-button" onClick={() => deleteContact(index)}>Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
