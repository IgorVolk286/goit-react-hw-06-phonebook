// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { contactReduser, filterReduser } from './Redusers';
import { contactsSlice } from './Contactsslice';
import { filterSlice } from './Filterslice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contactList')) ?? [],
//   filter: '',
// };
