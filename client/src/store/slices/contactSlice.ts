import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useContactService from 'src/services/useContactService';
import { IContact } from 'src/types/IContact';

interface ContactState {
  contactModal:boolean;
  userContacts: IContact[] | null;
  alertMessage:string
}

const initialState:ContactState = {
  contactModal: false,
  userContacts: null,
  alertMessage: '',
};

export const create = createAsyncThunk(
  'contact/create',
  async (data:IContact) => {
    const { createContact } = useContactService();
    const response = await createContact(data);
    return response;
  },
);
export const get = createAsyncThunk(
  'contact/get',
  async (authorId:string) => {
    const { getContacts } = useContactService();
    const response = await getContacts(authorId);
    return response;
  },
);

const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    openContactModal: (state) => {
      state.contactModal = true;
    },
    closeContactModal: (state) => {
      state.contactModal = false;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(create.fulfilled, (state, action) => {
        if (state.userContacts) state.userContacts = [...state.userContacts, action.payload];
      })
      .addCase(get.fulfilled, (state, action) => {
        state.userContacts = action.payload;
      });
  },
});

const { actions, reducer } = ContactSlice;

export default reducer;

export const {
  openContactModal,
  closeContactModal,
} = actions;
