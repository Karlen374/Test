import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useContactService from 'src/services/useContactService';
import { IContact } from 'src/types/IContact';

interface IEditForm{
  name:string;
  surName:string;
  age:number;
  gender:string;
  city:string;
  number: string;
}
interface ContactState {
  contactModal:boolean;
  userContacts: IContact[] | null;
  editContact: IEditForm;
  editContactId: string;
  alertMessage:string
}
const initialState:ContactState = {
  contactModal: false,
  userContacts: null,
  editContact: {
    name: '', surName: '', age: 18, gender: '', city: '', number: '',
  },
  editContactId: '',
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
export const edit = createAsyncThunk(
  'contact/edit',
  async (data:IContact) => {
    const { editContact } = useContactService();
    const response = await editContact(data);
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
      state.editContact = {
        name: '', surName: '', age: 18, gender: '', city: '', number: '',
      };
    },
    getEditContactData: (state, action) => {
      console.log(action.payload);
      state.editContact = action.payload;
      state.contactModal = true;
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
  getEditContactData,
} = actions;
