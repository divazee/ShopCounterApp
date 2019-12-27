import React from 'react';

//stateless functional component
const NavBar = ({ totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light m-3">
            <a href="#" className="navbar-brand">
                NavBar{" "}
                <span className="badge">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;