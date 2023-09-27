import { useEffect, useState, useMemo } from 'react';

// import { Form } from './form/form';
import { nanoid } from 'nanoid';
import { FilterCon } from './FilterContacts/FilterContacts';
import { ContactList } from './ContactsList/ContactList';
import { Layout } from './Layout';
import { Title, TitleBook } from './App.styled';
import { GlobalStyle } from './GlobalStyled';
import { FormFormik } from './form/FormFormik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const contactList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactList')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const filtered = event => {
    setFilter(event.target.value);
  };

  const addContacts = formValues => {
    const { name, number } = formValues;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(cont => cont.name === contact.name)) {
      return toast.warn(`${contact.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(cont => cont.id !== id));
    console.log(id);
  };

  const visibleContact = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, contacts]);

  return (
    <Layout>
      <Title>PHONEBOOK</Title>

      <FormFormik addContacts={addContacts} />

      <TitleBook>CONTACTS</TitleBook>

      <FilterCon filter={filter} contFilter={filtered} />

      <ContactList dataRender={visibleContact} onClickDelete={deleteContact} />
      <GlobalStyle />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </Layout>
  );
};
