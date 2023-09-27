import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text, ButtonDelete } from './ContactList.styled';

export const ContactList = ({ dataRender, onClickDelete }) => {
  console.log(dataRender);
  return (
    <List>
      {dataRender.map(({ name, id, number }) => {
        return (
          <ListItem key={id} id={id}>
            <Text>
              {name} : {number}
            </Text>
            <ButtonDelete onClick={() => onClickDelete(id)}>
              DELETE
            </ButtonDelete>
          </ListItem>
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  dataRender: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func,
};
