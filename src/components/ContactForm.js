import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, contact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addContact({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{contact ? 'Actualizar Contacto' : 'Agregar Contacto'}</button>
    </form>
  );
}

export default ContactForm;
