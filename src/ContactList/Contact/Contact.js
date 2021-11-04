import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import s from './Contact.module.css';

function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li className={s.card}>
      <div className={s.cardContent}>
        <p className={s.cardInfo}>{name}</p>
        <p className={s.cardInfo}>{number}</p>
        <button
          className={s.cardButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete contact
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};

export default Contact;
