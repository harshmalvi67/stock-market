import React from 'react';
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Stock Market</NavLink>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link " to="/Link">Link</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;