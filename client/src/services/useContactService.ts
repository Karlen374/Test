import { useHttp } from 'src/hooks/useHttp';
import { IContact } from 'src/types/IContact';

const useContactService = () => {
  const _apiBase = 'http://localhost:5000/contact';
  const { request } = useHttp();

  const createContact = async (data:IContact) => {
    const res = await request(`${_apiBase}/create`, 'POST', JSON.stringify(data));
    return res;
  };

  const getContacts = async (authorid:string) => {
    const header = { authorid, 'Content-Type': 'application/json' };
    const res = await request(`${_apiBase}/get`, 'GET', null, header);
    return res;
  };
  return {
    createContact,
    getContacts,
  };
};

export default useContactService;
