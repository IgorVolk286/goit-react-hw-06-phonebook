// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'Redux/selectors';
// import { Form } from './form/form';
// import { nanoid } from 'nanoid';
import { FilterCon } from './FilterContacts/FilterContacts';
import { ContactList } from './ContactsList/ContactList';
import { Layout } from './Layout';
import { Title, TitleBook } from './App.styled';
import { GlobalStyle } from './GlobalStyled';
import { FormFormik } from './form/FormFormik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Layout>
      <Title>PHONEBOOK</Title>
      <FormFormik />
      <TitleBook>CONTACTS</TitleBook>
      <FilterCon />
      <ContactList />
      <GlobalStyle />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </Layout>
  );
};

// const contacts = useSelector(getContacts);

// useEffect(() => {
//   localStorage.setItem('contactList', JSON.stringify(contacts));
// }, [contacts]);
