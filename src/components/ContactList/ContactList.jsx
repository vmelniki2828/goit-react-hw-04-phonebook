import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

const ContactList = ({ filttredContacts, removeContact }) => {
  return (
    <ul>
      {filttredContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contact_li} key={id}>
            {name} : {number}
            <button
            className={styles.delete_btn}
              type="button"
              onClick={() => {
                removeContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  filttredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
