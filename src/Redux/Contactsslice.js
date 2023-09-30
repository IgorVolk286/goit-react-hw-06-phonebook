import { createSlice, nanoid } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    list: [],
  },

  reducers: {
    addContact(state, action) {
      state.list.push(action.payload);
    },
    prepare({ name, number }) {
      const id = nanoid();
      return {
        payload: {
          name,
          id,
          number,
        },
      };
    },
    deleteCont(state, action) {
      // state.filter(el => el.id !== action.payload);
      const index = state.list.findIndex(task => task.id === action.payload);
      state.list.splice(index, 1);
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
