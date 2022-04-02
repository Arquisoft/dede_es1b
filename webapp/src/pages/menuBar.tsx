import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { MenuList } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../logoAsturShop.png'
import { AlignHorizontalLeft, ShoppingCart } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./menuBar.css";
import Divider from '@mui/material/Divider';
import {useNavigate} from 'react-router-dom';
import MenuBarAdmin from "./menuBarAdmin";

const settings = ['Perfil', 'Mi cuenta', 'Mis pedidos', 'Ayuda', 'Cerrar sesión'];


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

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event: { currentTarget: any; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserMenuOptions = (setting:string) => {
    switch(setting){
      case "Cerrar sesión":{
        localStorage.setItem("token","");
        console.log(localStorage.getItem("token"));
        navigate("/inicio");
        console.log("clickaste cerrar sesion");
        break;
      }
      case "Perfil":{
        console.log("clickaste perfil");
        break;
      }
      default:{
        console.log("otruuuutrucutrucu");
        break;
      }
    }

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const token = localStorage.getItem("token");
  const tipoUser = localStorage.getItem("tipoUser");

  const navigate = useNavigate();

  if(token!=("") && tipoUser=="usuario"){
  return (
    <div className="appBar">
    <AppBar position="static">
      
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
          <MenuItem component={Link} to="/inicio">
          <Typography>INICIO</Typography>
          </MenuItem>
          </Box>

       
          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/catalogo" >
          <Typography>CATÁLOGO</Typography>
          </MenuItem>
          </Box>

          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/registro" >
          <Typography>¿ERES PROVEEDOR?</Typography>
          </MenuItem>
          </Box>

          <Box  sx={{ paddingLeft: '3%' }}>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          </Box>
          
          <Box sx={{ paddingLeft:'3%' ,marginRight:'auto'}}>
          <div className="shoppingIcon">
          <IconButton  >
                <ShoppingCart/>                
            </IconButton>
          </div>
          
          </Box>


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
              {settings.map((setting) => (
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
  }
  else if(tipoUser=="administrador" && token!=""){
    return (
    <MenuBarAdmin></MenuBarAdmin>
    );
  }
  else{
    return (
      <div className="appBar">
      <AppBar position="static">
        
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
            <MenuItem component={Link} to="/inicio">
            <Typography>INICIO</Typography>
            </MenuItem>
            </Box>
  
         
            <Box sx={{ paddingLeft: '3%' }}>
            <MenuItem component={Link} to="/catalogo" >
            <Typography>CATÁLOGO</Typography>
            </MenuItem>
            </Box>
  
            <Box sx={{ paddingLeft: '3%' }}>
            <MenuItem component={Link} to="/registro" >
            <Typography>¿ERES PROVEEDOR?</Typography>
            </MenuItem>
            </Box>
  
            <Box  sx={{ paddingLeft: '3%' }}>
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            
            </Box>
            
            <Box sx={{ paddingLeft:'3%' ,marginRight:'auto'}}>
            <div className="shoppingIcon">
            <IconButton  >
                  <ShoppingCart/>                
              </IconButton>
            </div>
            
            </Box>
  
  
            <Box  sx={{marginLeft:'auto'}}>
            <div className="iconoLoggin">
                  <IconButton onClick={handleOpenUserMenu}  >
                  <AccountCircle 
                    style={{ fontSize: "35px", color: '#FFFFFF ' }}
                    onClick={() => navigate("/loggin")}
                  />
                  </IconButton>
  
            </div>
            
            </Box>
          </Toolbar>
  
          </div>
  
      </AppBar>
      
      </div>
    );
  }
};
export default ResponsiveAppBar;


