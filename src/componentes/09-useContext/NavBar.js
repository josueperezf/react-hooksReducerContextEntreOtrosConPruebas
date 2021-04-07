import React from 'react'
import {
    NavLink
  } from 'react-router-dom';
// Link y NavLink hacen lo mismo, con la diferencia de que en el NavLink se puede especificar una clase css cuando el router este en esa ruta, si no esta en esa ruta no la pone
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink exact activeClassName='active' to='./' className="navbar-brand" >Navbar</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName='active' to='./' className="nav-link" aria-current="page" >Home</NavLink>
                        <NavLink exact activeClassName='active' to='./about' className="nav-link" >About</NavLink>
                        <NavLink exact activeClassName='active' to='./login' className="nav-link" >Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}


/*
<nav>
    <ul>
        <li>
            <Link to='./'>Home</Link>
        </li>
        <li>
            <Link to='./about'> About </Link>
        </li>
        <li>
            <Link to='./login'>Login</Link>
        </li>
    </ul>
</nav>
*/