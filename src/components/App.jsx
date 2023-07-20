import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const dataParsed = JSON.parse(localStorage.getItem('phonebook'))
    if(!dataParsed) return
    this.setState({contacts: dataParsed})
  }

  componentDidUpdate(_, prevState) {
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('phonebook', JSON.stringify(this.state.contacts))
    }
  }

  inputValueForm = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(contact => {
        return contact.name === name || contact.number === number;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { name, number, id: nanoid() }],
    }));
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    if (filter.length === 0) return contacts;
    const filttredContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filttredContacts;
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          inputValueForm={this.inputValueForm}
          value={this.state.filter}
        />
        <ContactList
          filttredContacts={this.filterContact()}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}
