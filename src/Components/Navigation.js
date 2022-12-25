import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginBar from '../containers/LoginBar';
import { AppBar, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import cookie from 'cookie';

const theme = createTheme({
    palette: {
      primary: {
        main: '#3BB371',
      },
      secondary: {
        main: '#E0E0E0',
      },
    },
  });

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedIn'] ? true : false;
  };


const Navigation = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Typography>
                            <Link to="/">Listings</Link>
                        </Typography>
                    </li>
                    {checkAuth() ? (
                        <li className='nav-list-item'>
                        <Link to='/add'>
                          <Typography style={{ color: 'white' }}>Add</Typography>
                        </Link>
                      </li>
                            ) : null}
                    <li
                    className='nav-list-item'
                    onClick={() => {
                        document.cookie = cookie.serialize('loggedIn', null, {
                        maxAge: 0,
                    });
                        navigate('/login');
                     }}
                     >
                        <Typography style={{ color: 'white' }}>
                            {checkAuth() ? 'Logout' : 'Login'}
                         </Typography>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
        {checkAuth() ? <LoginBar /> : null}
        </ThemeProvider>
    );
};

export default Navigation;