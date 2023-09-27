import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { LabelFilterContact, InputFilter } from './FilterContacts.styled';

export const FilterCon = ({ filter, contFilter }) => {
  return (
    <LabelFilterContact LabelFilter htmlFor={nanoid()}>
      FILTER CONTACTS
      <InputFilter
        type="text"
        value={filter}
        onChange={contFilter}
        placeholder="Enter name"
      />
    </LabelFilterContact>
  );
};
FilterCon.propTypes = {
  filter: PropTypes.string.isRequired,
  contFilter: PropTypes.func,
};
