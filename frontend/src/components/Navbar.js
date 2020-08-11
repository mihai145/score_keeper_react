import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

export default function Navbar () {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">

                    <Link to="/" className="navbar-brand"><span role="img" aria-label="Football">⚽</span></Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/addMatch" className="nav-link">Add match</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addTeam" className="nav-link">Add team</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </React.Fragment>
    );
}