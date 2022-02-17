import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import logo from './././logo.png'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a style={{ color: '#27AE60' }} target="_blank" className={item.cName} href={item.url}>
                                    {item.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <img className='logo-icon' src={logo}></img>
                <Link exact to='/' style={{textDecoration: 'none' }}>
                    <h1 className="navbar-logo">Ballerini Devs<i className="fab fa-react"></i></h1>
                </Link>
                    
                
            </nav>
        )
    }
}

export default Navbar