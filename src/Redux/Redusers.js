// import { combineReducers } from 'redux';

// const contactsIntialState =
//   JSON.parse(localStorage.getItem('contactList')) ?? [];

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

// const filterIntialState = '';

// export const filterReduser = (state = filterIntialState, action) => {
//   switch (action.type) {
//     case 'filter/actual': {
//       return action.payload;
//     }

//     default:
//       return state;
//   }
// };
// export const rootReducer = combineReducers({
//   contacts: contactReduser,
//   filter: filterReduser,
// });

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addcontact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteCont': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(el => el.id !== action.payload),
//       };
//     }
//     case 'filter/actual': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };
