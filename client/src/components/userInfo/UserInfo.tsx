import { useAppSelector } from 'src/hooks/hooks';
import SignInForm from 'src/components/signInForm/signInForm';
import SignUpForm from 'src/components/signUpForm/signUpForm';
import Modal from 'src/components/modal/modal';
import UserInfoHeader from './UserInfoHeader';

const UserInfo = () => {
  const { signInModal, signUpModal } = useAppSelector((store) => store.authorization);
  return (
    <>
      <UserInfoHeader />
      <Modal active={signInModal}>
        <SignInForm />
      </Modal>
      <Modal active={signUpModal}>
        <SignUpForm />
      </Modal>
      <h2>
        Profile Page
      </h2>
    </>
  );
};
export default UserInfo;
