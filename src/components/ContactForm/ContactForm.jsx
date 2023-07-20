import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({addContact}) => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const reset = () => {
    setName('')
    setNumber('')
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, number);
    reset();
  };

  const inputValueForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };


  return (
    <form className={styles.theForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={styles.main_input}
          onChange={inputValueForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>

      <label htmlFor="number">
        Number
        <input
          className={styles.main_input}
          onChange={inputValueForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>

      <button className={styles.sub_btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}
