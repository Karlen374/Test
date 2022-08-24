import Button from '@mui/material/Button';
import { useAppDispatch } from 'src/hooks/hooks';
import { openSignUpModal } from 'src/store/slices/authorizationSlice';

const UserInfoHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <Button onClick={() => dispatch(openSignUpModal())} variant="contained" color="success">
      Регистрация
    </Button>
  );
};
export default UserInfoHeader;
