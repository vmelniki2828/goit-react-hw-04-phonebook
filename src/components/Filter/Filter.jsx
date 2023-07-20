import PropTypes from 'prop-types';
import styles from './Filter.module.css'

const Filter = ({ inputValueForm, value }) => {
  return (
    <input className={styles.filter_input} onChange={inputValueForm} type="text" name="filter" value={value} />
  );
};

export default Filter;

Filter.propTypes = {
  inputValueForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};