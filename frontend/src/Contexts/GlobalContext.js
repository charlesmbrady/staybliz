import { createContext } from 'react';

export const GlobalContext = createContext({
  sideDrawerOpen: false,
  modalVisible: false,
  isSubmitting: false,
  project: {
    id: null,
    name: '',
    todos: [],
  },
});
