import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Container, Heder } from './App.styled';

const LS_KEY = 'My contacts';
const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const contactsList = JSON.parse(localStorage.getItem(LS_KEY));
  const [contacts, setContacts] = useState(() => {
    return [...contactsList] ?? startContacts;
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  const submitForm = data => {
    const newContact = { ...data, id: nanoid() };
    if (isContactNew(contacts, newContact)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const isContactNew = (contacts, newContact) => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const filterByName = () => {
    const optimiseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(optimiseFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== contactId);
    });
  };
  const filteredName = filterByName();
  return (
    <Container>
      <Heder>Phonebook</Heder>
      <ContactForm onSubmit={submitForm} />

      <Contacts contacts={filteredName} deleteContact={deleteContact}>
        <Filter filter={filter} changeFilter={changeFilter} />
      </Contacts>
    </Container>
  );
};
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount = () => {
//     const startState = JSON.parse(localStorage.getItem(LS_KEY));
//     if (startState) {
//       this.setState({ contacts: [...startState] });
//     }
//   };
//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   submitForm = data => {
//     const newContact = { ...data, id: nanoid() };
//     const { contacts } = this.state;
//     if (this.isContactNew(contacts, newContact)) {
//       alert(`${newContact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   isContactNew = (contacts, newContact) => {
//     return contacts.some(
//       ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
//     );
//   };

//   changeFilter = event => {
//     const { value } = event.currentTarget;
//     this.setState({ filter: value });
//   };

//   filterByName = () => {
//     const { contacts, filter } = this.state;
//     const optimiseFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(optimiseFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const contactsList = this.filterByName();

//     return (
//       <Container>
//         <Heder>Phonebook</Heder>
//         <ContactForm onSubmit={this.submitForm} />

//         <Contacts contacts={contactsList} deleteContact={this.deleteContact}>
//           <Filter filter={filter} changeFilter={this.changeFilter} />
//         </Contacts>
//       </Container>
//     );
//   }
// }
