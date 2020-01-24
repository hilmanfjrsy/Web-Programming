import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import './Navbar.css';
import Logo from '../Image/Logo.png';
import { AiFillHome } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.css';
import { FaDatabase, FaSignOutAlt, FaSignInAlt,FaPowerOff } from 'react-icons/fa';

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <Nav vertical className="nav-vertical">
                <img src={Logo} width="180" height="50" className="nav-logo"/>
                    <ul className="navbar-nav mr-auto nav-menu">
                        <li className="text-nav"><NavLink activeClassName="nav-link-active" className="nav-link" to={'/Home'}> <AiFillHome className="nav-icon" />Beranda </NavLink></li>
                        <li className="text-nav"><NavLink activeClassName="nav-link-active" className="nav-link" to={'/Databarang'}> <FaDatabase className="nav-icon" />Data Barang </NavLink></li>
                        <li className="text-nav"><NavLink activeClassName="nav-link-active" className="nav-link" to={'/Databarangmasuk'}> <FaSignInAlt className="nav-icon" />Data Barang Masuk </NavLink></li>
                        <li className="text-nav"><NavLink activeClassName="nav-link-active" className="nav-link" to={'/Databarangkeluar'}> <FaSignOutAlt className="nav-icon" /> Data Barang Keluar </NavLink></li>
                        <li className="text-nav"><NavLink className="nav-link" to={'/'}> <FaPowerOff className="nav-icon" /> Logout </NavLink></li>
                    </ul>
                </Nav>
            </div>
        );
    }
}

export default Navbar