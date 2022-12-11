import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import cookie from 'cookie'


// write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth =() => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedin'] ? true : false;

};

// write ProtectedRoute function here
// This will hide routes unless logged in
const ProtectedRoute = (props) => {
    const {component: Component} = props
    return checkAuth() === true ? <Component /> : <Navigate to='/login'/>;
}


const Router = () => {
    return(
        <Route>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route/>
        </Route>
    )
}

export default Router;