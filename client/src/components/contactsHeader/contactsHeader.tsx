import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import style from './contactsHeader.module.scss';

const ContactsHeader = () => {
  return (
    <div className={style.header}>
      <TextField id="outlined-basic" label="Поиск" variant="outlined" />
      <Button variant="contained" color="success" endIcon={<AddIcon />}>
        Добавить Контакт
      </Button>
    </div>

  );
};
export default ContactsHeader;
