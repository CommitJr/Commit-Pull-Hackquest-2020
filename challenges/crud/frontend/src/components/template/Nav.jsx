import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/commits">
                <i className="fa fa-git"></i> Commits
            </Link>
            <Link to="/branch">
                <i className="fa fa-github"></i> Branchs
            </Link>
        </nav>
    </aside>