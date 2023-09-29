import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    prepare({ name, number }) {
      return {
        payload: {
          name,
          id: nanoid(),
          number,
        },
      };
    },
    deleteCont(state, action) {
      // state.filter(el => el.id !== action.payload);
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

console.log(contactsSlice);

export const { addContact, deleteCont } = contactsSlice.actions;
export const getContacts = state => state.contacts;

// для редакс\\\\\

// export const contactReduser = (state = contactsIntialState, action) => {
//   switch (action.type) {
//     case 'contacts/addcontact': {
//       return [...state, action.payload];
//     }
//     case 'contacts/deleteCont': {
//       return state.filter(el => el.id !== action.payload);
//     }

//     default:
//       return state;
//   }
// };
