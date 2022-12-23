import React from 'react'
import { AppBar, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import LoginBar from '../containers/LoginBar';
import cookie from 'cookie';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedIn'] ? true : false;
  };


const Navigation = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/Add">Add</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;