import ContactsHeader from 'src/components/contactsHeader/contactsHeader';
import { useEffect } from 'react';
import { getRegisteredUserData } from 'src/store/slices/authorizationSlice';
import { useAppDispatch } from 'src/hooks/hooks';
import { get } from 'src/store/slices/contactSlice';
import ContactsList from '../contactsList/contactsList';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const registeredUserData = localStorage.getItem('registeredUserData');
    if (registeredUserData) {
      dispatch(getRegisteredUserData(JSON.parse(registeredUserData)));
      dispatch(get(JSON.parse(registeredUserData)._id));
    }
  }, []);

  return (
    <>
      <ContactsHeader />
      <ContactsList />
    </>

  );
};
export default ContactsPage;
