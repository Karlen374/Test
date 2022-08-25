import { useHttp } from 'src/hooks/useHttp';
import { IContact } from 'src/types/IContact';

const useContactService = () => {
  const _apiBase = 'http://localhost:5000/contact';
  const { request } = useHttp();

  const createContact = async (data:IContact) => {
    const res = await request(`${_apiBase}/create`, 'POST', JSON.stringify(data));
    return res;
  };

  const getContacts = async (authorId:string) => {
    const res = await request(`${_apiBase}/getContacts`, 'GET', JSON.stringify({ authorId }));
    return res;
  };
  return {
    createContact,
    getContacts,
  };
};

export default useContactService;
