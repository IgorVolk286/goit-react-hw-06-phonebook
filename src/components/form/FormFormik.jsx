import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/Contactsslice';
import { getContacts } from '../../Redux/Contactsslice';
import {
  TitleInput,
  AddButton,
  FormInput,
  ImputField,
  Message,
} from './Form.styled';
import * as Yup from 'yup';

// import { string, number } from 'yup';

let FormikSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters'
    )
    .min(2, 'Too Choot!')
    .max(20, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .min(6, 'Too Short!')
    .required('Required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number may contain only digits'
    ),
});

export const FormFormik = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={FormikSchema}
      onSubmit={(values, actions) => {
        if (contacts.list.some(cont => cont.name === values.name)) {
          return toast.warn(`${values.name} is already in contacts`);
        }

        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <FormInput>
        <TitleInput htmlFor={nanoid()}>NAME</TitleInput>
        <ImputField
          id={nanoid()}
          type="text"
          name="name"
          placeholder="Enter Name your friend"
        />
        <Message name="name" component="span" />
        <TitleInput htmlFor={nanoid()}>NUMBER</TitleInput>
        <ImputField
          id={nanoid()}
          type="tel"
          name="number"
          placeholder="Enter Phone your friend"
        />
        <Message name="number" component="span" />
        <AddButton type="submit">ADD CONTACT</AddButton>
      </FormInput>
    </Formik>
  );
};

/// єкшин для редаск\\\\

// const addContact = ({ name, number }) => {
//   if (contacts.some(cont => cont.name === name)) {
//     return toast.warn(`${name} is already in contacts`);
//   }
//   return {
//     type: 'contacts/addcontact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };
