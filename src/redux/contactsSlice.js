import { createSlice, nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        toast.success('Contact added.');
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      toast.success('Contact deleted.');
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
