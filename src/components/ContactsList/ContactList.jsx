// import { useMemo } from 'react';
// import PropTypes from 'prop-types';
import { List, ListItem, Text, ButtonDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  console.log(contacts);

  const deleteCont = id => {
    return {
      type: 'contacts/deleteCont',
      payload: id,
    };
  };

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const visibleContact = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [filter, contacts]);
  console.log(visibleContact);

  return (
    <List>
      {visibleContact.map(({ name, id, number }) => {
        return (
          <ListItem key={id} id={id}>
            <Text>
              {name} : {number}
            </Text>
            <ButtonDelete onClick={() => dispatch(deleteCont(id))}>
              DELETE
            </ButtonDelete>
          </ListItem>
        );
      })}
    </List>
  );
};
