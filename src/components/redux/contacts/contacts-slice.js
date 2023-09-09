import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;

export default contactsSlice.reducer;


export const selectFilteredContacts = state => {
  const { contacts, filter } = state.contacts;
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};