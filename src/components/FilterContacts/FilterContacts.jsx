import React from 'react';
import { nanoid } from 'nanoid';
import { LabelFilterContact, InputFilter } from './FilterContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { actual, getFilter } from '../../Redux/Filterslice';

export const FilterCon = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(filter);

  const filtered = event => dispatch(actual(event.target.value));

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

// const filterActual = event => {
//   return {
//     type: 'filter/actual',
//     payload: event.target.value,
//   };
// };
