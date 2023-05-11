import { useDispatch } from 'react-redux';
import { Item } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contactItem;

  return (
    <Item>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))} aria-label="Delete">
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
