import {User} from '../shared/shareddtypes';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContactPageIcon from '@mui/icons-material/ContactPage';



type UserListProps = {
  users: User[];
}

function UserList(props: UserListProps): JSX.Element {
  return (
    <>
      <List>
      {props.users.map((user,i)=>{
        return (
          <ListItem key={user.correo}>
            <ListItemIcon>
              <ContactPageIcon/>
            </ListItemIcon>
            <ListItemText primary={user.name} secondary={user.correo}/>
          </ListItem>
        )
      })}
      </List>
      
        
          
    </>
  );
}

export default UserList;
