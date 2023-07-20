import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {

  const getContact = () => {
    const dataParsed = localStorage.getItem('phonebook');
    if (dataParsed) {
      const dataParsed = JSON.parse('phonebook');

      return dataParsed;
    } else {
      return[
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  };

  const [contacts, setContacts] = useState(getContact);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts))
  },[contacts])

  const inputValueForm = e => {
    const { value } = e.target;

    setFilter(value)
  };

  const addContact = ( name, number ) => {
    if (
      contacts.some(contact => {
        return contact.name === name || contact.number === number;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prev => ({
      contacts: [...prev.contacts, { name, number, id: nanoid() }],
    }));
  };

  const filterContact = () => {
    if (filter.length === 0) return contacts;
    const filttredContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filttredContacts;
  };

  const removeContact = id => {
    setContacts(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter inputValueForm={inputValueForm} value={filter} />
      <ContactList
        filttredContacts={filterContact()}
        removeContact={removeContact}
      />
    </>
  );
};
