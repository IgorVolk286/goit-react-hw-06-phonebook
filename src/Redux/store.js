import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { rootReducer } from './Redusers';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contactList')) ?? [],
//   filter: '',
// };
