import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addContact(this.state);
    this.reset();
  };

  inputValueForm = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.theForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
          className={styles.main_input}
            onChange={this.inputValueForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>

        <label htmlFor="number">
          Number
          <input
          className={styles.main_input}
            onChange={this.inputValueForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>

        <button className={styles.sub_btn} type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
