import { getContacts, getFilter } from 'Redux/selectors';
import { List, ListItem, Text, ButtonDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(filter);

  const deleteCont = id => {
    return {
      type: 'contacts/deleteCont',
      payload: id,
    };
  };

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
