import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { IRegisteredUser } from 'src/types/IRegisteredUser';
import styles from './UserInfo.module.scss';

interface IRegisteredUsersData{
  userData:IRegisteredUser
}
const RegisteredUsersData = ({ userData }:IRegisteredUsersData) => {
  return (
    <Card className={styles.userProfile}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userData.userName.slice(0, 1)}
          </Avatar>
        )}
        title={userData.userName}
        subheader={userData.email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Возраст -
          {userData.userAge}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Пол -
          {userData.userGender}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Chip icon={<LocationCityIcon />} label={userData.userCity} variant="outlined" />
      </CardActions>
    </Card>
  );
};
export default RegisteredUsersData;
