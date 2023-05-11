import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { getContacts } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
