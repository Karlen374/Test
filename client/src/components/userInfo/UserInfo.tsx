import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import SignInForm from 'src/components/signInForm/signInForm';
import SignUpForm from 'src/components/signUpForm/signUpForm';
import Modal from 'src/components/modal/modal';
import { useEffect } from 'react';
import { getAllUsers } from 'src/store/slices/authorizationSlice';
import UserInfoHeader from './UserInfoHeader';
import UserProfileInfo from './userProfileInfo';
import RegisteredUsersData from './registeredUsersData';

const UserInfo = () => {
  const {
    registeredUserData, signInModal, signUpModal, allUsers,
  } = useAppSelector((store) => store.authorization);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <UserInfoHeader />
      <Modal active={signInModal}>
        <SignInForm />
      </Modal>
      <Modal active={signUpModal}>
        <SignUpForm />
      </Modal>
      {registeredUserData && registeredUserData?.email !== 'admin@mail.ru' && <UserProfileInfo />}
      {(registeredUserData?.email === 'admin@mail.ru' && allUsers)
        && (
        <>
          <h1>Все Авторизованные пользователи :</h1>
          {allUsers.map((user) => <RegisteredUsersData userData={user} key={user._id} />)}
        </>
        )}
      {!registeredUserData && (
      <h2>
        для получения  полного доступа нужно зарегистрироваться
      </h2>
      )}

    </>
  );
};
export default UserInfo;
