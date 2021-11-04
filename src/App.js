import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Contact from './ContactList/Contact';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = [...contacts].filter(({ name }) =>
    name.toLowerCase().includes(filter),
  );

  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactList>
        {filteredContacts.map(contact => (
          <Contact key={uuidv4()} contact={contact} />
        ))}
      </ContactList>
    </Container>
  );
}

export default App;
