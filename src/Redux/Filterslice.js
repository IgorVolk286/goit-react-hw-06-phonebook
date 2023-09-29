import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    actual(state, action) {
      return action.payload;
    },
  },
});

export const { actual } = filterSlice.actions;

export const getFilter = state => state.filter;
