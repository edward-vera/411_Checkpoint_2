import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Listings from './containers/Listings'
import Login from './components/Login'
import About from './containers/About'
import Add from './containers/Add'
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
        <Routes>
            <Route path="/" element={<Listings />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about/:id" element={<About />}/>
            <Route path="/add" element={<Add />}/>
            <Route/>
        </Routes>
    )
}

export default Router;