import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

//import { accountService } from '_services';

function Nav() {
    // const [account, setAccount] = useState(null);
    // useEffect(() => {
    //     accountService.account.subscribe(x => setAccount(x));
    // }, []);

    // only show nav when logged in
    //if (!account) return null;

    return (
        <nav className="navbar navbar-expand navbar-dark bg-light">
            <div className="container">
                <div className="navbar-brand">
                    <NavLink exact to="/" className="nav-item nav-link">React Login Example</NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink exact to="/" className="nav-item nav-link">Dashboard</NavLink>
                </div>
                <div className="navbar-nav ml-auto">
                    <NavLink exact to="/login" className="nav-item nav-link">Login</NavLink>
                    <NavLink exact to="/register" className="nav-item nav-link">Register</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;