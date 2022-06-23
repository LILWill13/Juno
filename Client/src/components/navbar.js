import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth'



export default function Navbar() {
    return (
        <div  className="NavbarContainer">
             <div className="navbarLinks">
                    { auth.loggedIn() ? (
                    <button onClick={auth.logout} className="navbarLink">Logout</button> 
                    ) : (
                    <>
                    <Link to="/login"><button className="navbarLink" >Login</button></Link>
                    <Link to="/signup"><button className="navbarLink">Signup</button></Link>
                    </>
                    )}
                 </div>
        </div>
    );
}