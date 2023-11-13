// import logo from './logo.svg';
import logoo from './images/r1bg.png';
import './App.css';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function App() {

  const my_pages = ['Solutions', 'Training', 'Events', 'Venues'];
  const my_settings = ['Profile', 'Account', 'Logout'];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenSettingsMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <div className="App">
      <header className="App-header">


        {/* <AppBar position="static"> */}
        <AppBar position="static" style={{ backgroundColor: "transparent", color: "black", boxShadow: "0px 0px 0px 0px" }}>

          <Toolbar>
            <StoreIcon></StoreIcon>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 200,
                fontFamily: 'roboto',
                color: 'white',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }}
            >
              AthletePro
            </Typography>
            <Box sx={{ flexWrap: 'wrap', flexGrow: 1, display: 'flex' }}>
              {my_pages.map((page) => (
                <Button
                  key={my_pages}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open my_settings"> */}
              <Tooltip title="Click Here">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                  {/* <IconButton onClick={handleOpenSettingsMenu} sx={{width: 50, height: 50,p: 1.5,borderRadius: 12,border: 0,backgroundColor: "white",}}> */}
                  <Avatar alt="A" src="/static/images/avatar/2.png" />
                  {/* <img src={logoo} className="App-logo" alt="logo" /> */}


                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '55px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseSettingsMenu}
              >
                {my_settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseSettingsMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logoo} className="App-logo" alt="logo" />
        <h2>AthletePro </h2>
        <p>
          Smart Athletic (Track Event) Management System
        </p>

      </header>
    </div>
  );
}

export default App;
