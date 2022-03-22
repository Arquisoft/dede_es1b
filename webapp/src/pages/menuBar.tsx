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
  

  return (
    <div className="appBar">
    <AppBar position="static">
      
      <div className="menu-container">
          <Toolbar >
          
          <Box>
          <MenuItem component={Link} to="/inicio">
          <Typography>INICIO</Typography>
          </MenuItem>
          </Box>

        <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/loggin">
          <Typography>LOGGIN</Typography>
          </MenuItem>
          </Box>

          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/registro" >
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
          <IconButton sx={{ paddingLeft: '50%' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
          </div>
        </Toolbar>

        </div>

    </AppBar>
    
    </div>
  );
};
export default ResponsiveAppBar;
