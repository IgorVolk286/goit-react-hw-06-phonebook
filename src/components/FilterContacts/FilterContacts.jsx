import React from 'react';
import { nanoid } from 'nanoid';

import { LabelFilterContact, InputFilter } from './FilterContacts.styled';
import { useSelector, useDispatch } from 'react-redux';

export const FilterCon = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterActual = event => {
    return {
      type: 'filter/actual',
      payload: event.target.value,
    };
  };

  const filtered = event => {
    dispatch(filterActual(event));
  };

  return (
    <LabelFilterContact LabelFilter htmlFor={nanoid()}>
      FILTER CONTACTS
      <InputFilter
        type="text"
        value={filter}
        onChange={filtered}
        placeholder="Enter name"
      />
    </LabelFilterContact>
  );
};
