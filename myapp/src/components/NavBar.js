import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props)
        console.log(props.match)
        this.state = {
             
        }
    }
    
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
      }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo center">My React App</a>
                    <ul className="left hide-on-med-and-down">
                        <li className={this.getNavLinkClass("/")}><NavLink to="/">Home</NavLink></li>
                        <li className={this.getNavLinkClass("/error")}><NavLink to="/error">404</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar
