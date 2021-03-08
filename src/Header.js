import React from 'react'
import "./Header.css"
import {
    Link
} from "react-router-dom"
function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Link to = "/">Chris P.</Link>

         </div>
        <div className= "navigation">
            <ul>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>

        </div>

        </div>
    )
}

export default Header
