import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
// const url='http://localhost:5000/api/auth/userinfo';
import { withRouter } from 'react-router-dom';
const Header = (props) => {
    const loginDisplay = () => {
        if(sessionStorage.getItem('_ltk') == null) {
            return (
                <Fragment>
                        <li><Link to="/signIn"><span className="glyphicon glyphicon-user"></span> Sign In</Link></li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </Fragment>
            );
        }
        else {
            return (
                <li><Link to="/profile"><span className="glyphicon glyphicon-log-in"></span> SignOut</Link></li>
            );
        }
    }
    return (
        <nav className="navbar navbar-inverse">
                <div className="container-fluid nav-display">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">My Todo App</Link>
                    {/* <Link className="navbar-brand" to="/profile">Welcome {sessionStorage.getItem('name')}</Link> */}
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li ><Link to="/completed">Completed Tasks</Link></li>
                        <li ><Link to="/pending">Pending Tasks</Link></li>
                        {/* <li ><Link to="/profile">Profile</Link></li> */}
                    </ul>
                    {/* <ul className="nav navbar-nav navbar-right">                        
                        {loginDisplay()}                        
                    </ul> */}
                    </div>
                </div>
            </nav>
    );
}

export default withRouter(Header);
