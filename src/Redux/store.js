import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contactList')) ?? [],
  filter: '',
};
const enhancer = devToolsEnhancer();

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addcontact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deleteCont': {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
    }
    case 'filter/actual': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};

export const store = createStore(rootReducer, enhancer);
