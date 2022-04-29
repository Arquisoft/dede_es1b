import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { backdropClasses, MenuList } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../logoAsturShop.png'
import { AlignHorizontalLeft, ShoppingCart } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./menuBarAdmin.css";
import {useNavigate} from 'react-router-dom';

import {
  LoginButton,
  Text,
  useSession,
  CombinedDataProvider,
  LogoutButton,
  SessionProvider,
} from "@inrupt/solid-ui-react";

const settingsAdmin = ['Cerrar sesión'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const AdminAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: { currentTarget: any; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuOptions = (setting:string) => {
    switch(setting){
      case "Cerrar sesión":{
        localStorage.setItem("token","");
        navigate("/inicio");
        console.log("clickaste cerrar sesion");
        break;
      }
      default:{
        console.log("otruuuutrucutrucu");
        break;
      }
    }
  
  };
  
  return (
    <div className="appBar">
    <AppBar position="static" style={{ background: '#2e7d32' }}>
      
      <div className="menu-container">
          <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/inicio"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            
          >
                    <img src={logo} width="100" height="80" alt="logo" /> 

          </Typography>
          <Box>
          <MenuItem component={Link} to="/usuarios/list">
          <Typography>Lista de clientes</Typography>
          </MenuItem>
          </Box>

       
          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/gestionProductos" >
          <Typography>Gestión productos</Typography>
          </MenuItem>
          </Box>

          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/productos/list" >
          <Typography>Lista de productos</Typography>
          </MenuItem>
          </Box>

          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/gestionPedidos" >
          <Typography>Gestión pedidos</Typography>
          </MenuItem>
          </Box>
          
          <SessionProvider >       
	          <LogoutButton 
             onLogout={()=>{navigate("/inicio");}}
             
            />
           </SessionProvider>

          <Box  sx={{marginLeft:'auto'}}>
          <div className="iconoLoggin">
                <IconButton onClick={handleOpenUserMenu}  >
                <AccountCircle 
                  style={{ fontSize: "35px", color: '#FFFFFF ' }}
                />
                </IconButton>

          </div>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settingsAdmin.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleUserMenuOptions(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>

        </div>

    </AppBar>
    
    </div>
  );
};
export default AdminAppBar;
function setAnchorElUser(currentTarget: any) {
  throw new Error('Function not implemented.');
}